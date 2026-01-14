import Text from "../components/text";
import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import InputCheckbox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Skeleton from "../components/skeleton";


//importação dos ícones svg
import TrashIcon from "../assets/icons/trash.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import PlusIcon from "../assets/icons/plus.svg?react";
import SpinnerIcon from "../assets/icons/spinner.svg?react";
import XIcon from "../assets/icons/x.svg?react";

export default function PageComponents() {
      return (
    <Container>
      
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

      <div className="flex gap-1">
        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">2 de 5</Badge>
        <Badge loading>5</Badge>
      </div>

      <div>
        <Button icons={PlusIcon}>Nova tarefa</Button>
      </div>


      <div className="flex gap-1">
        <ButtonIcon  icon={TrashIcon} />
        <ButtonIcon  icon={TrashIcon} variant="secondary"/>
        <ButtonIcon  icon={TrashIcon} variant="tertiary" />
        <ButtonIcon  icon={TrashIcon} loading />
      </div>

      <div>
        <InputText placeholder="Digite sua tarefa..." />
      </div>

      <div>
        <InputCheckbox />
        <InputCheckbox loading />
      </div>

      <div>
        <Card size="md">olá mundo!!!</Card>
      </div>

      <div className="space-y-2 ">
        <Skeleton className=" h-6" />
        <Skeleton className=" h-6" />
        <Skeleton className="w-96 h-6" />
      </div>

    </div>
    </Container>
  );
}