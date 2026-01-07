
import Text from "./components/text";
import Icon from "./components/icon";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import InputText from "./components/input-text";

//importação dos ícones svg
import TrashIcon from "./assets/icons/Trash.svg?react";
import CheckIcon from "./assets/icons/check.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import XIcon from "./assets/icons/x.svg?react";
import Badge from "./components/badge";



export default function App() {

  return (
    <div className="grid gap-10">
      <div className="flex flex-col gap-1">
        <Text variant="body-sm-bold" className="text-pink-base">
          olá mundo !!
        </Text>

              <Text className="text-green-base">
          olá mundo !!
        </Text>

              <Text variant="body-md-bold">
          olá mundo !!
        </Text>

              <Text variant="body-sm-bold" className="text-gray-400">
          olá mundo !!
        </Text>
      </div>
      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-green-base" />
        <Icon svg={CheckIcon} />
        <Icon svg={PlusIcon} />
        <Icon svg={SpinnerIcon} animate />
        <Icon svg={PencilIcon} />
        <Icon svg={XIcon} />
      </div>

      <div>
        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">2 de 5</Badge>
      </div>

      <div>
        <Button icons={PlusIcon}>Nova tarefa</Button>
      </div>


      <div className="flex gap-1">
        <ButtonIcon  icon={TrashIcon} />
        <ButtonIcon  icon={TrashIcon} variant="secondary"/>
        <ButtonIcon  icon={TrashIcon} variant="tertiary" />
      </div>

      <div>
        <InputText placeholder="Digite sua tarefa..." />
      </div>




    </div>
  );
}

