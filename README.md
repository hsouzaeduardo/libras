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
    git clone https://github.com/hsouzaeduardo/libras.git
  ```

2. **Start the project**

  ```shell
  # move to the project folder and install all dependencies
  
  cd libras
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

* [Link no Youtube](https://www.youtube.com/watch?v=J65krxa_sto) - By [Henrique Souza] 

<!-- AUTO-GENERATED-CONTENT:END -->

Keypoint Diagram
Diagrama de pontos-chave Consulte o diagrama abaixo para saber quais são esses pontos-chave e seus índices na matriz.

![image](https://user-images.githubusercontent.com/1692867/139126694-f098c81f-9464-4dba-a1a0-85c1f31c2cce.png)

Pontos-chave do MediaPipe Hands: Usado no MediaPipe Hands
Pontos-chave das mãos do MediaPipe 

0: pulso

1: thumb_cmc

2: thumb_mcp

3: thumb_ip

4: thumb_tip

5: index_finger_mcp

6: index_finger_pip

7: index_finger_dip

8: index_finger_tip

9: middle_finger_mcp

10: middle_finger_pip

11: middle_finger_dip

12: middle_finger_tip

13: ring_finger_mcp

14: ring_finger_pip

15: ring_finger_dip

16: ring_finger_tip

17: pinky_finger_mcp

18: pinky_finger_pip

19: pinky_finger_dip

20: pinky_finger_tip
