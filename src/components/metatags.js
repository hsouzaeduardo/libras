import React from 'react'
import {Helmet} from 'react-helmet'

export default function Metatags() {
    return (
        <div>
            <Helmet htmlAttributes={{
    lang: 'id',
  }}>
          <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
          <title>Avanade-Libras | Aprenda ASL usando a câmera AI</title>
          <link rel="canonical" href="https://handsign-m4qq6.ondigitalocean.app/" />
          <meta name="description" content='Uma detecção de alfabeto ASL (American Sign Language) simples usando o modelo TensorFlow e Handpose.'/>
                <meta name="image" content='https://ik.imagekit.io/ps3xes4nrg/loveyou_emoji_0Y73SHTRFTaJ.svg' /> 
                
                {/* OpenGraph tags */}
                <meta property="og:url" content="https://handsign-m4qq6.ondigitalocean.app/"/> 
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Avanade-Libras |  Aprenda ASL usando a câmera AI" />
                <meta property="og:description" content='Uma detecção de alfabeto ASL (American Sign Language) simples usando o modelo TensorFlow e Handpose.'/>
                <meta property="og:image" content='https://ik.imagekit.io/ps3xes4nrg/loveyou_emoji_0Y73SHTRFTaJ.svg?tr=w-1200,h-630,fo-auto'/>
                <meta property="fb:app_id" content=''/> 
                
                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:creator" content="@syauqy"/>
                <meta name="twitter:title" content="Avanade-Libras |  Aprenda ASL usando a câmera AI"/>
                <meta name="twitter:description" content='Uma detecção de alfabeto ASL (American Sign Language) simples usando o modelo TensorFlow e Handpose.'/>
                <meta name="twitter:image" content="https://ik.imagekit.io/ps3xes4nrg/loveyou_emoji_0Y73SHTRFTaJ.svg?tr=w-1200,h-675,fo-auto"/>
        </Helmet>
        </div>
    )
}
