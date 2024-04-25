export function useThemeProvider() {
  enum AppThemes {
    'light',
    'dark',
  }

  type TThemesCondition = keyof typeof AppThemes

  const themeTransitionMap: { [key in TThemesCondition]: TThemesCondition } = {
    'light': 'dark',
    'dark': 'light',
  }

  const themeCookie = useCookie<keyof typeof AppThemes>(
    'selected-theme',
    {
      watch: 'shallow',
      default: () => 'light',
    }
  )

  const changeTheme = () => {
    themeCookie.value = themeTransitionMap[themeCookie.value]
  }

  const getCurrentTheme = computed(() => ({
    currentTheme: themeCookie.value,
    nextTheme: themeTransitionMap[themeCookie.value],
  }))

  return {
    AppThemes,
    changeTheme,
    getCurrentTheme,
  }
}
