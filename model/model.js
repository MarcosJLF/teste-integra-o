
import Sequelize from 'sequelize';

const sequelize = new Sequelize ('users','postgres', 'intelbras', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

async function testarConexao(){
  try{
    await sequelize.authenticate();

    console.log(`Conexão com o banco de daos foi bem-sucedida!`)
  }catch(error){
    console.error(`Não foi possível conectar ao banco de dados:`, error)
  }
}

testarConexao()

export default {testarConexao}