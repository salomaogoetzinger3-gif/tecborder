import "./formulario-de-evento.estilos.css";
import { TituloFormulario } from "../TituloFormulario";
import { Label } from "../Label";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { ListaSuspensa } from "../ListaSuspensa";
import { Botao } from "../Botao";

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            placeholder="Summer dev hits"
            name="nomeEvento"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Tema do evento</Label>
          <ListaSuspensa></ListaSuspensa>
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <Botao>Criar Evento</Botao>
      </div>
    </form>
  );
}
