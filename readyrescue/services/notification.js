import axios from "axios";

const enviaNotificacao = async () => {
  try {
    const response = await axios.post(
      "http://localhost:3001/envio-mensagem",
      {
        to: to,
        body: body,
      }
    );

    if (response.data.status === "sucess") {
      Alert.alert("Mensagem enviada com sucesso!");
    } else {
      Alert.alert("Erro ao enviar mensagem", response.data.message);
    }
  } catch (error) {
    console.error("Erro ao enviar mensagem: ", error);
    Alert.alert(
      "Erro",
      "Erro ao enviar mensagem. Verifique a conexão ou tente novamente mais tarde."
    );
  }
};

const EnvioNotificacaoServico = {
  enviaNotificacao,
};

export default EnvioNotificacaoServico;
