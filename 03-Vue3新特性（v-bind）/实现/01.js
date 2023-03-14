// 定义暗黑主题变量
export default {
  fontSize: '16px',
  fontColor: '#eee',
  background: '#333',
};
// 定义白天主题变量
export default {
  fontSize: '20px',
  fontColor: '#f90',
  background: '#eee',
};

import { shallowRef } from 'vue';
// 引入主题
import theme_day from './theme_day';
import theme_dark from './theme_dark';

// 定义在全局的样式变量
const theme = shallowRef({});

export function useTheme() {
  // 尝试从本地读取
  const localTheme = localStorage.getItem('theme');
  theme.value = localTheme ? JSON.parse(localTheme) : theme_day;

  const setDayTheme = () => {
    theme.value = theme_day;
  };

  const setDarkTheme = () => {
    theme.value = theme_dark;
  };

  return {
    theme,
    setDayTheme,
    setDarkTheme,
  };
}