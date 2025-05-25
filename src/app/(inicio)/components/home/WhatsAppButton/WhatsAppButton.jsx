'use client'
import { FloatingWhatsApp } from "react-floating-whatsapp";

export const WhatsAppButton = ()=>{
    return (
        <FloatingWhatsApp
            phoneNumber="525538773863"
            accountName="WEBRSTUDIO"
            chatMessage="Hola, ¿te agrada este sitio web? contáctanos para brindarte más información"
            placeholder="Escribe un mensaje"
            statusMessage="La solución web ideal para ti"
            allowClickAway
            avatar="/assets/images/logo/logo.png"
        />
    )
}