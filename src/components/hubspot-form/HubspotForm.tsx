import React, { useEffect, useState } from 'react'
import styles from './hubspot-form.module.css'

declare global {
  interface Window {
    hbspt: any
  }
}

export type HubspotForm = {
  visible: boolean
}

export const HubspotForm: FC<HubspotForm> = ({ children, visible }) => {
  const [hbspt, setHbspt] = useState<any>(null)
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//js.hsforms.net/forms/shell.js'
    script.async = true
    script.crossorigin = true
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementsByTagName('head')[0]!.appendChild(script)
    const checkHubspotLoaded = setInterval(() => {
      if (window.hbspt !== undefined) {
        setHbspt(window.hbspt)
        clearInterval(checkHubspotLoaded)
      }
    }, 200)
  }, [])
  useEffect(() => {
    if (hbspt) {
      hbspt.forms.create({
        portalId: '7385167',
        target: '#HubspotHook',
        formId: 'af15f5bd-1ed5-44f7-af09-06f9d99923be'
      })
    }
  }, [hbspt])
  return (
    <div className={`${styles.wrap} ${visible ? styles.visible : ''}`}>
      <div id="HubspotHook" />
    </div>
  )
}
