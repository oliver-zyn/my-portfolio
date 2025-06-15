import {
  BodyContact,
  ContactContainer,
  StatusMessage,
  FormProgressBar,
  FormProgress,
  InputWrapper,
} from './styles'
import { Fade } from 'react-awesome-reveal'
import { TitleSection } from '../TitleSection'
import { useState, useEffect, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Check, X, Envelope } from 'phosphor-react'

interface FormStatus {
  type: 'success' | 'error' | null
  message: string
}

interface FormData {
  name: string
  email: string
  message: string
}

export function Contact() {
  const titleContactArray = [
    'C',
    'o',
    'n',
    't',
    'a',
    't',
    'e',
    '-',
    'm',
    'e',
    '!',
  ]

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: null,
    message: '',
  })
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [formProgress, setFormProgress] = useState(0)

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const calculateProgress = () => {
    let progress = 0
    if (formData.name.length > 2) progress += 33
    if (validateEmail(formData.email)) progress += 33
    if (formData.message.length > 10) progress += 34
    return progress
  }

  useEffect(() => {
    setFormProgress(calculateProgress())
  }, [formData])

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: null, message: '' })

    const form = e.currentTarget
    const formDataToSend = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/mgvyyazy', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message:
            '🎉 Mensagem enviada com sucesso! Entrarei em contato em breve.',
        })
        setFormData({ name: '', email: '', message: '' })
        form.reset()
      } else {
        throw new Error('Erro no servidor')
      }
    } catch (error) {
      setFormStatus({
        type: 'error',
        message:
          '❌ Erro ao enviar mensagem. Tente novamente ou entre em contato pelo LinkedIn.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const getInputIcon = (field: keyof FormData) => {
    const value = formData[field]

    if (field === 'name' && value.length > 2)
      return <Check className="input-icon valid" size={20} />
    if (field === 'email' && validateEmail(value))
      return <Check className="input-icon valid" size={20} />
    if (field === 'message' && value.length > 10)
      return <Check className="input-icon valid" size={20} />

    if (field === 'name' && value.length > 0 && value.length <= 2)
      return <X className="input-icon invalid" size={20} />
    if (field === 'email' && value.length > 0 && !validateEmail(value))
      return <X className="input-icon invalid" size={20} />
    if (field === 'message' && value.length > 0 && value.length <= 10)
      return <X className="input-icon invalid" size={20} />

    return null
  }

  return (
    <Fade duration={1000} delay={300} triggerOnce>
      <ContactContainer id="contact">
        <TitleSection
          subtitle="Contatos"
          titleLetterArray={titleContactArray}
        />
        <BodyContact>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Progress Bar */}
            <FormProgressBar>
              <FormProgress progress={formProgress} />
            </FormProgressBar>

            {/* Campo Nome */}
            <InputWrapper>
              <input
                type="text"
                name="name"
                placeholder="Nome"
                required
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
              {getInputIcon('name')}
            </InputWrapper>

            {/* Campo Email */}
            <InputWrapper>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
              {getInputIcon('email')}
            </InputWrapper>

            {/* Campo Mensagem */}
            <InputWrapper>
              <textarea
                name="message"
                placeholder="Mensagem"
                maxLength={500}
                required
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                rows={6}
              />
              {getInputIcon('message')}
            </InputWrapper>

            {/* Status Message */}
            {formStatus.type && (
              <StatusMessage type={formStatus.type}>
                {formStatus.message}
              </StatusMessage>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting || formProgress < 100}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner" />
                  Enviando...
                </>
              ) : (
                <>
                  <Envelope size={18} />
                  Enviar mensagem
                </>
              )}
            </motion.button>
          </motion.form>
        </BodyContact>
      </ContactContainer>
    </Fade>
  )
}
