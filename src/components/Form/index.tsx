import React, { useState } from "react";
import { Alert } from "react-native";
import { Button } from "../Button";
import { ControlledInput } from "../ControlledInput";
import { Container } from "./styles";
import { useForm } from "react-hook-form";

const VALID_EMAIL_EXPRESSION =
  /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

type FormData = {
  de: string;
  para: string;
  assunto: string;
  texto: string;
  transporter: string;
  info: string;
};

export function Form() {
  const { control, handleSubmit } = useForm<FormData>();

  function SendMail(data: FormData) {
    console.log(data);
  }

  return (
    <Container>
      <ControlledInput
        name="de"
        control={control}
        icon="mail"
        placeholder="De"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <ControlledInput
        name="para"
        control={control}
        icon="mail"
        placeholder="Para"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <ControlledInput
        name="assunto"
        control={control}
        icon="code"
        placeholder="Assunto"
      />
      <ControlledInput
        name="texto"
        control={control}
        icon="type"
        placeholder="Corpo do E-mail"
      />

      <Button title="Enviar" onPress={handleSubmit(SendMail)} />
    </Container>
  );
}
