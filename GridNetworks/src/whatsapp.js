// Números de WhatsApp usados no site.
// "geral" é o número padrão de todos os botões.
// "sistemas" é usado só no botão de Desenvolvimento de Sistemas.
export const WHATSAPP_NUMBERS = {
  geral: "5511982796560",
  sistemas: "5511976916580",
};

// Monta o link do WhatsApp com uma mensagem pré-pronta.
// Ex: whatsappLink(WHATSAPP_NUMBERS.geral, "Olá!")
export function whatsappLink(numero, mensagem) {
  const base = `https://wa.me/${numero}`;
  if (!mensagem) return base;
  return `${base}?text=${encodeURIComponent(mensagem)}`;
}
