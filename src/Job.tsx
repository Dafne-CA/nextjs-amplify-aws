import { useNavigate } from "react-router-dom";
import { Button, View, Heading, Text,Breadcrumbs, createTheme } from "@aws-amplify/ui-react";

function Job() {
  const navigate = useNavigate();

  return (
    <View>
      <Heading level={2}>
        Bienvenido a Manantial Trabajo
        <Breadcrumbs
        items={[
          {
            href: '/',
            label: 'Home',
          },
          {
            href: '/react/components',
            label: 'Acerca de',
          },
          {
            label: 'Breadcrumbs',
          },
        ]}
      />
      </Heading>
      <Text fontSize="large" margin="20px">
        Estás explorando la aplicación sin iniciar sesión.
      </Text>
      
      <Button margin="20px" onClick={() => navigate("/")}>
        Volver al inicio de sesión
      </Button>
    </View>
  );
}

export default Job;
