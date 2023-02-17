import "./ListaSuspensa.css";

const ListaSupensa = (props) => {
  return (
    <div className="lista-suspensa">

      <label>{props.label}</label>

      <select
        required={props.obrigatorio}
        value={props.valor}
        onChange={(evento) => props.aoAlterar(evento.target.value)}
      >
        <option value=""></option>

        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
        
      </select>
    </div>
  );
};

export default ListaSupensa;
