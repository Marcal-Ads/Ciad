import { useLocalSearchParams, Redirect, router } from 'expo-router';
import { StyleSheet, View, Text, Pressable, ScrollView } from 'react-native';

interface ContentItem {
  title: string;
  content: string;
  color: string;
}

interface ContentDatabase {
  [key: string]: {
    [key: string]: ContentItem
  };
}

const contentData: ContentDatabase = {
  '1': {
    '1': {
      title: 'Ações',
      content:  ` 
  • Verificar se há energia na tomada da cama, ligando outro equipamento na mesma tomada.

  • Pressionar o mesmo botão nos outros comandos, verifique se o botão está falhando em mais de um comando.

  • Em caso positivo solicitar a troca da cama e acionar a manutenção.`,
      color:'rgba(39, 174, 96, 0.9)' 
    },
     '2': {
      title: 'Ações',
      content: `Caso as luzes estejam piscando:

Modelo Hill Rom II:
  • Pressionar botões de elevação e descida ao mesmo tempo por 10 segundos.

Caso as luzes estejam acesas:

  • Pressionar o cadeado e a tecla que está acesa para baixo.

Modelo Interprice:

  • Pressionar o cadeado após a tecla que está acesa.`,
      color: 'rgba(39, 174, 96, 0.9)'
    },
    '3': {
      title: 'Ações',
      content: 
      ` 
  • Verificar se há energia na tomada da cama, ligando outro equipamento na mesma tomada.

  • Verificar se o cabo de força se encontra bem encaixado, caso não esteja encaixar.
  
  • Caso os passos anteriores não resolvam solicitar a troca da cama e entrar em contato com a manutenção.`       
       ,
      color: 'rgba(39, 174, 96, 0.9)'
    },
    '4': {
      title: 'Ações',
      content: ` 
  • De imediato solicitar a troca da cama. 

  • Manter todas as peças soltas proxima a cama em um saco plastico.
  
  • Entrar em contato com a manutenção.`,
      color: 'rgba(39, 174, 96, 0.9)'
    }
  },
  '2': {
    '1': {
      title: 'Ações',
      content: ` 
  • Testar chamada no leito ao lado para descartar ausencia de energia. 

  • Verificar se o botão reset não esta travado, que pode ser verificado segurando o botão acionador da chamada.
  
  • Caso problema persista entrar em contato com a manutenção.`,
      color: 'rgba(39, 174, 96, 0.9)'
    },
    '2': {
      title: 'Ações',
      content: ` 
  • Pressionar o botão reset na base da chamada. 

  • Verificar se o botão acionador não está pressionado no leito ao lado.
  
  • Verificar se a chamada do wc não foi acionada,após verificação, pressionar o reset.
  
  • Caso problema persista entrar em contato com a manutenção.
  `,
      color: 'rgba(39, 174, 96, 0.9)'
    },
    '3': {
      title: 'Ações',
      content:  ` 
      • Retirar chamada danificada e acondiona-la em um saco plastico. 
    
      • Pressionar o botão reset na base da chamada, o que pode ser verificado segurando o botão acionador da chamada.
      
      • Caso problema percista entrar em contato com a manutenção.
      
      • Abrir chamado no "Effort" no caminho eletrica / chamada de enfermagem..
      `,
      color: 'rgba(39, 174, 96, 0.9)'
    },
    '4': {
      title: 'Ações',
      content: `• Entrar em contato com a manutenção.
      
      • Abrir chamado no "Effort" no caminho eletrica / chamada de enfermagem / chamada ausente.
      `,
      color: 'rgba(39, 174, 96, 0.9)'
    }
  },
  '3': {
    '1': {
      title: 'Ações',
      content: ` 
      • Verificar se o aparelho esta conectado tomada de telefone . 

      • verificar se os cabos estão devidamente encaixados no aparelho.
    
      • verificar se o monofone está devidamente encaixado no aparelho,
       retirar e colocar o monofone, aguardar 10 segundos e testar novamente.
      
      •Caso não resolva abrir chamado no "Effort" no caminho eletrica / telefone.
      `,
      color: 'rgba(39, 174, 96, 0.9)'
    },
    '2': {
      title: 'Ações',
      content: `
      •Testar o telefone em outro ponto.

      •caso persista abrir chamado no "Effort" 
      no caminho eletrica / telefone.
      `,
      color: 'rgba(39, 174, 96, 0.9)'
    },
    '3': {
      title: 'Ações',
      content:  ` 
      • Acionar a manutenção para executar um verificação fisica e desumidificação do aparelho . 

      •Caso não resolva abrir chamado no "Effort" no caminho eletrica / telefone / troca.
      `,
      color: 'rgba(39, 174, 96, 0.9)'
    },
    '4': {
      title: 'Ações',
      content:  ` 
      • Trocar o aparelho por outro, a carater de teste, e verificar se resolveu o problema. 

      • Acionar a manutenção para verificação fisica da linha e definir se problema e na linha ou local. 

      •Caso não resolva abrir chamado no "Effort" no caminho eletrica / telefone / reparo.
      `,
      color: 'rgba(39, 174, 96, 0.9)'
    } 
  },
  '4': { 
    '1': {
      title: 'Ações',
      content: ` 
      • Verificar se o problema em apenas um canal especifico. 

      • verificar se não está selecionada a entrada errada (Hdmi ou Av). 

      •Caso não resolva abrir chamado no "Effort" no caminho eletrica / televisor / sinal.
      `,
      color: 'rgba(39, 174, 96, 0.9)'
    },
    '2': {
      title: 'Ações',
      content: ` 
      • Verificar se a tv está ligado na tomada ou se a fonte esta conectada. 

      • verificar se há tensão na tomada. 

      •Caso não resolva abrir chamado no "Effort" no caminho eletrica / televisor / troca.
      `,
      color: 'rgba(39, 174, 96, 0.9)'
    },
    '3': {
      title: 'Ações',
      content: ` 
      • Verificar se o problema em apenas um canal especifico. 

      • verificar se não está selecionada a entrada errada (Hdmi ou Av). 

      • verificar se o canal solicitado faz parte da grade contratada.

      •Caso não resolva abrir chamado no "Effort" no caminho eletrica / televisor / cabo.
      `,
      color: 'rgba(39, 174, 96, 0.9)'
    },
    '4': {
      title: 'Ações',
      content: ` 
      • Trocar as pilhas. 

      • verificar se o controle é da mesma
       marca que a tv. 

      • Testar controle usando a camera de um celular.

      •Caso não resolva solicitar a troca do controle no gerenciamento de leitos.
      `,
      color: 'rgba(39, 174, 96, 0.9)'
    }
  }
};

export default function ContentScreen() {
  const { menu, submenu } = useLocalSearchParams();
  const menuStr = String(menu);
  const submenuStr = String(submenu);

  if (!contentData[menuStr]?.[submenuStr]) {
    return <Redirect href="/(menus)/[...not_found]" />;
  }

  const { title, content, color } = contentData[menuStr][submenuStr];

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Pressable 
        onPress={() => router.back()} 
        style={({ pressed }) => [
          styles.backButton,
          pressed && styles.backButtonPressed
        ]}
      >
        <Text style={styles.backButtonText}>← Voltar</Text>
      </Pressable>

      <Text style={styles.title}>{title}</Text>
      
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.contentBox}>
          <Text style={styles.contentText}>{content}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: 'rgba(39, 174, 96, 0.9)',
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
    fontSize: 48,
    fontWeight: 'bold',
    color: '#145a32',
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  contentBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
    padding: 25,
  },
  contentText: {
    fontSize: 24,
    color: '#145a32',
    textAlign: 'center',
    lineHeight: 32,
  },
});
