import { Link } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CIAD</Text>
      <View style={styles.menuContainer}>
        {['Cama', 'Chamada', 'Ramal', 'Tv'].map((menu, index) => (
          <Link 
            key={index} 
            href={`./(menus)/${index + 1}`} 
            style={styles.button}
          >
            <Text style={styles.buttonText}>{menu}</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
   title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#145a32',
    marginBottom: 60,
    letterSpacing: 2,
    textShadowColor: 'rgba(20, 90, 50, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
    menuContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 20,
    marginTop: 40,
  },
    button: {
    backgroundColor: '#27ae60',
    padding: 20,
    borderRadius: 15,
    width: '85%',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    borderWidth: 2,
    borderColor: '#219653',
  },
    buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});