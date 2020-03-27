import { Typography } from '@bring-n-ring/components'
import { IonButton, IonContent, IonSlide, IonSlides } from '@ionic/react'
import * as React from 'react'
import Phone from '../../components/phone/Phone'
import styles from './app-description.module.css'

const slideOpts = {
  initialSlide: 1,
  speed: 400
}

export type AppDescriptionProps = {
  title: string
  body: string
  btnText: string
  slides: [
    {
      src: string
      alt: string
      title: string
      description: string
    }
  ]
}

const AppDescription: React.FC<AppDescriptionProps> = ({ title, body, btnText, slides }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <Typography className={styles.title} color="primary" size="h1">
          {title}
        </Typography>
        <Typography className={styles.body} size="p">
          {body}
        </Typography>
        <div className={styles.alignCenter}>
          <IonButton>{btnText}</IonButton>
        </div>
      </div>
      <div className={styles.width}>
        <Phone>
          <IonContent>
            <IonSlides options={slideOpts} key="demo-phone">
              {slides.map(slide => (
                <IonSlide>
                  <div>
                    Test
                    <img src={slide.src} alt={slide.alt} />
                  </div>
                </IonSlide>
              ))}
            </IonSlides>
          </IonContent>
        </Phone>
      </div>
      <div className={styles.description}>
        <IonSlides options={slideOpts} key="demo-decription">
          {slides.map(slide => (
            <IonSlide>
              <Typography className={styles.title} size="h2">
                {slide.title}
              </Typography>
              <Typography className={styles.body} size="p">
                {slide.description}
              </Typography>
            </IonSlide>
          ))}
        </IonSlides>
      </div>
    </div>
  )
}

export default AppDescription
