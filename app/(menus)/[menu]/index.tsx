import { useLocalSearchParams, router, Link } from 'expo-router';
import { StyleSheet, View, Text, Pressable } from 'react-native';

type CustomNamesType = {
  [key: string]: string[];
};

const customNames: CustomNamesType = {
  '1': ['Comando Falhando', 'Travada', 'Não Liga', 'Peça Solta'],
  '2': ['Não Aciona', 'Travada', 'Danificada', 'Ausente'],
  '3': ['Mudo', 'Chiando', 'Teclado Ruim', 'Intermitente'],
  '4': ['Sem Sinal', 'Tv Não Liga', 'Tv a Cabo', 'Controle remoto']
};

export default function SubMenuScreen() {
  const { menu } = useLocalSearchParams();
  const menuKey = String(menu);

  const handleBack = () => {
    router.back();
  };

  if (!customNames[menuKey]) {
    router.replace('/');
    return null;
  }

  return (
    <View style={styles.container}>
      {}
      <Pressable 
        onPress={handleBack}
        style={styles.backButton}
      >
        <Text style={styles.backButtonText}>‹ Voltar</Text>
      </Pressable>

      <Text style={styles.title}>Problema</Text>
      
      <View style={styles.menuContainer}>
        {customNames[menuKey].map((name, index) => (
          <Link
            key={index}
            href={{
              pathname: "/(menus)/content",
              params: { 
                menu: menuKey,
                submenu: String(index + 1)
              }
            }}
            asChild
          >
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>{name}</Text>
            </Pressable>
          </Link>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(39, 174, 96, 0.9)',
    paddingTop: 70,
    paddingHorizontal: 50,
  },

  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: '#27ae60',
    elevation: 5,
    zIndex: 1,
  },
  
  backButtonPressed: {
    backgroundColor: '#219653',
    },

  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#145a32',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 10,
  },
  menuContainer: {
    width: '100%',
    gap: 15,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#27ae60',
    padding: 20,
    borderRadius: 15,
    width: '100%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 2,
    borderColor: '#219653',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});
