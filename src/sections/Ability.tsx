import abilitys from '../assets/ability.png';
import shapeAbility from '../assets/shapeAbility.png';

export function Ability() {
  return (
    <section
      id="ability's"
      className="bg-zinc-300 text-black flex flex-col-reverse md:flex-row items-center lg:px-16 px-5 gap-9 justify-between w-full min-h-screen"
    >
      <article className="h-3/5">
        <img src={abilitys} alt="" className="p-5 lg:w-[70%] xl:w-[90%]" />
      </article>
      <article className=" w-full lg:w-[60%]">
        <div className="flex items-center mb-8">
          <h3 className="text-5xl font-black font-SpaceGrotesk">Habilidades</h3>
          <img src={shapeAbility} alt="" className="h-6 mt-2 ml-[2px]" />
        </div>
        <p className="font-Satoshi text-gray-600 leading-8">
          Dominando o universo do desenvolvimento, minhas habilidades englobam{' '}
          <span className="font-bold">JavaScript</span> e <span className="font-bold">TypeScript</span> para lógica
          robusta, <span className="font-bold">Java</span> para soluções escaláveis,{' '}
          <span className="font-bold">Styled Components</span> e <span className="font-bold"></span>Tailwind para
          estilos refinados, <span className="font-bold">Figma</span> para design intuitivo,{' '}
          <span className="font-bold">PostgreSQL</span> e <span className="font-bold">MongoDB</span> em gerenciamento
          eficiente de dados, <span className="font-bold">Jest</span> para testes confiáveis,{' '}
          <span className="font-bold">React</span> para interfaces dinâmicas, e <span className="font-bold">Git</span>{' '}
          para controle preciso de versões.
        </p>
      </article>
    </section>
  );
}
