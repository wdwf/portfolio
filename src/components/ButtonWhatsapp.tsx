import whatsIcon from '../assets/whatsapp.png';

export default function ButtonWhatsapp() {
  return (
    <div className="fixed bottom-28 right-6 xl:right-[3.5%] 2xl:right-[11.5%] z-40">
      <a href="https://wa.me/5511968354069" target="_blank" rel="noopener noreferrer">
        <img src={whatsIcon} alt="fale conosco pelo WhatsApp" width={50} title="fale conosco pelo WhatsApp" />
      </a>
    </div>
  );
}
