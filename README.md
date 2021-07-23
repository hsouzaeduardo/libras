<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://handsign-m4qq6.ondigitalocean.app/">
    <img alt="Handsign logo" src="./src/images/loveyou_emoji.svg" width="80" />
  </a>
</p>
<h1 align="center">
  Libras - TensorFlow para detecção de libras
</h1>

Libras é um simples reconhecimento de gestos de mão baseado em IA que traduz uma pose de mão no alfabeto sendo adaptado de (ASL) para libras. Usando o Tensorflow JS e seu modelo pré-carregado Handpose para detectar o objeto de mão e suas partes. A Handsign também usa uma biblioteca adicional chamada Fingerpose para classificar alguns dos gestos de mão personalizados com base na posição do dedo.

`#dohackathon` `#madewithTFJS`

# Instalação
1. **Clone o repositório**

  ```shell
    git clone https://github.com/syauqy/handsign-tensorflow-gatsby.git
  ```

2. **Start the project**

  ```shell
  # move to the project folder and install all dependencies
  
  cd handsign-tensorflow-gatsby
  yarn install
  ```

3. **Run the project on your local machine**

  ```shell
  # run Gatsby

  yarn develop
  ```

4. **The project is live 🚀**
  
  Seu projeto vai rodar neste endereço: `http://localhost:8000`

  Caso queira editar todo app está em: `src/pages/app.js`

# O que há dentro do projeto

# Referencias e Libs

* [Tensorflow JS](https://www.tensorflow.org/js) - A Library for ML in JS.

* [Handpose](https://github.com/tensorflow/tfjs-models/tree/master/handpose) - Um pipeline de ML leve que consiste em dois modelos: um detector de palma e um modelo de rastreamento de mão-esqueleto de dedo.
* [Fingerpose](https://github.com/andypotato/fingerpose) - Um classificador de pose para pontos de referência manuais detectados pelo modelo do TensorFlow.js Handpose.

Se você quiser saber mais sobre Tensorflow JS e gesto de mão personalizado, por favor, confira estes vídeos incríveis

* [Machine Learning with TensorFlow in JavaScript](https://www.youtube.com/watch?v=WIHZ7kjJ35o) - by [Jason Lengstorf](https://github.com/jlengstorf) and [Jason Mayes](https://github.com/jasonmayes)

* [Building a Real Time Sign Language Detection App with React.JS and Tensorflow.JS](https://www.youtube.com/watch?v=ZTSRZt04JkY) - by [Nicholas Renotte](https://github.com/nicknochnack)

<!-- AUTO-GENERATED-CONTENT:END -->
