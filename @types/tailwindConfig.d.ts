declare module 'tailwindcss/resolveConfig' {
  type fileType = typeof import('../tailwind.config')
  const resolveConfig: (config: fileType) => fileType
  export default resolveConfig
}
