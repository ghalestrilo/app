import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  igorText: {
    fontSize: fonts.biggest,
    color: colors.yellow,
  },
  igorLayout: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    marginBottom: '20%',
    marginLeft: '10%',
    marginRight: '10%',
  },
  login: {
    fontSize: fonts.bigger,
  },
  senha: {
    fontSize: fonts.bigger,
  },
  buttonsContainer: {
    flex: 4,
    alignItems: 'flex-end',
  },
  entrarimg: {
    marginRight: 30,
    width: 120,
    height: 100,
  },
  rest: {
    margin: 10,
  },
  restText: {
    fontSize: fonts.regular,
    color: colors.black,
  },
  logo: {
    width: 200,
    height: 125,
  },
});

export default styles;
