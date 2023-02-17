import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  return (

    // Renderização Condicional pode ser feita com ternário ou com comparacao, como o operador &&

    props.colaboradores.length > 0 ? (
      <section
        className="time"
        style={{ backgroundColor: props.corSecundaria }}
      >
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>

        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              key={colaborador.nome}
              corDeFundo={props.corPrimaria}
            />
          ))}
        </div>
      </section>
    )
    : ''

    // Fim da Renderização Condicional

  );
};

export default Time;
