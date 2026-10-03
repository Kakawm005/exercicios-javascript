/**
 * Manzano - L02L: Saudação conforme o sexo
 */
const { lerTexto, escrever, executar } = require('../util');

executar(async () => {
  const nome = await lerTexto('Nome:');
  const sexo = (await lerTexto('Sexo (M/F):')).toUpperCase();
  if (sexo === 'M') escrever(`Ilmo Sr. ${nome}`);
  else if (sexo === 'F') escrever(`Ilma Sra. ${nome}`);
  else escrever('Sexo inválido. Use M ou F.');
});
