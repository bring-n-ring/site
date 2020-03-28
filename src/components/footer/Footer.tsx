import * as React from 'react'
import { IonFooter, IonButton } from '@ionic/react'
import { Typography } from '@bring-n-ring/components'
import styles from './Footer.module.css'

const Footer: React.FC = () => (
  <IonFooter className={`ion-no-border ${styles.footer}`}>
    <Typography color="tertiary" size="h2">
      Mach mit und helfe.
    </Typography>
    <IonButton color="primary">Werde Beta-Tester</IonButton>
  </IonFooter>
)

export default Footer
