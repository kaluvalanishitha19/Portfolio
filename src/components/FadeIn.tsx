import { motion, type HTMLMotionProps } from 'framer-motion'

type ElementTag = 'div' | 'img' | 'section' | 'p' | 'h1' | 'h2' | 'span'

type FadeInProps = HTMLMotionProps<'div'> & {
  as?: ElementTag
  delay?: number
  duration?: number
  x?: number
  y?: number
}

export default function FadeIn({
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  children,
  ...props
}: FadeInProps) {
  const Component = motion.create(as) as typeof motion.div

  return (
    <Component
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      {...props}
    >
      {children}
    </Component>
  )
}
