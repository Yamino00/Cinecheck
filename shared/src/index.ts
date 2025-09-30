// Services
export * from './services/tmdb'
export * from './services/quiz'
export * from './services/content'

// Lib
export * from './lib/supabase'

// Theme
export * from './theme/colors'

// Re-export default instances
export { default as tmdb } from './services/tmdb'
export { default as quizService } from './services/quiz'
export { default as supabase } from './lib/supabase'
export { default as colors } from './theme/colors'