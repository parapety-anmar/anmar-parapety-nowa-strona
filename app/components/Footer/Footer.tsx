'use client'

import Container from 'components/shared/layout/Container'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="py-8">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              delay: 0.2,
            },
          }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-y-5 text-sm md:flex-row"
        >
          <p>&copy; 2023 AN-MAR Parapety</p>
          <p>Parapety Olsztyn - Okna Olsztyn</p>
          <p className="text-center">
            Wykonanie:{' '}
            <a
              className="border-b-primary-500/0 text-primary-400 focus-visible:border-b-primary-500/100 border-b-2 font-medium outline-none"
              href="mailto:oz.robert@o2.pl"
            >
              oz.robert@o2.pl
            </a>
          </p>
        </motion.div>
      </Container>
    </footer>
  )
}

export default Footer
