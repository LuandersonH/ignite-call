<!-- autocomplete do '@ignite-ui/react' -->
em tsconfig.json: {
- "moduleResolution": "bundler"
+ "moduleResolution": "node"
}
--- moduleResolution define como o TypeScript encontra os arquivos dos módulos (como @ignite-ui/react). 
--- 'bundler' funciona com Vite, Bun, esbuild, é mais novo. Mas 'node' segue o pedrão do Node que é usado pelo Next.js, React, o tradicional. A troca faz com que o autocomplete encontre corretamente o 'node_modules\@ignite-ui\react\dist\index.d.ts'

<!-- Tag image i = quality e priority -->
<Image src={previewImage} height={400} quality={100} priority alt="" />

<!-- validação com Zod -->
z.object({
  z.string().regex(/^([a-z\-]+)$/i)
})
--- Significa: "valide uma string que siga esse padrão de regex"
| Parte         | Significado                                                                 |
|---------------|-----------------------------------------------------------------------------|
| `/.../`       | Delimita a expressão regular                                                |
| `^`           | Começo da string                                                            |
| `([a-z\-]+)`  | Um ou mais caracteres de a a z ou hífen (`-`)                               |
| `[a-z\-]`     | Um único caractere de a-z ou hífen                                          |
| `+`           | Um ou mais do anterior                                                      |
| `()`          | Agrupamento (não obrigatório nesse caso, mas comum)                         |
| `$`           | Fim da string                                                               |
| `i`           | *Flag* "ignore case" → aceita maiúsculas ou minúsculas                     |



<!-- HookForm -->
 const {
    register,
    setValue,
  } = useForm({
    resolver: zodResolver(),
  })
----setValue serve para setar um valor de forma manual no form

<!-- query.router -->
após a '?', onde temos a query string, o Next.js extraí os parâmetros da URL, como 'www.ignite-call.com/register?username=João'. O valor é acessível em router.query.username

<!-- API ROUTES - overview -->
Formas de ter rotas back-end na aplicação dentro do front-end no nosso App. Utilizadas exclusivamente nas operações back-end auxiliares na construção do front-end.
Algo exclusivo da Web, por exemplo, pode ser adicionado nas API Routes, ao invés do back-end geral que serve para outras plataformas, de modo imaginário.
Produtivo e útil, porém, não escalável ao mesmo nível de front e back separados.

Usa o Node para o back-end, ou seja, o que podemos usar com o Node, podemos também usar nas API Routes.

Porém, o tipo de servidor interfere — se ele funciona 24h, como um servidor Node tradicional, ou se apenas roda nas requisições dos usuários (serverless).

Em ambientes serverless, algumas funções que precisam de um processamento de dados a todo momento não funcionarão, assim como os WebSockets (dependem das mensagens e respostas do servidor a todo momento) ou long-running (filas), que se tornam inviáveis.

Stateless é um ambiente sem estado: a cada requisição do usuário, a aplicação roda em um ambiente isolado dos outros ambientes. Cada pessoa acessa um contêiner da nossa aplicação — não é compartilhado.

<!-- Prisma - introdução -->
ORM para o Node.js, facilitando o acesso ao banco de dados. 
Altamente integrado ao TypeScript, detectando automaticamente as colunas e tabelas do banco de dados, gerando autocompletes para as querys, sabendo os dados que podem ser inseridos, buscados, uso de where, join...

--- npm i prisma -D: faz a instalação da CLI do Prisma, a interface de linha de comando.
--- npm i @prisma/client: é a dependência instada para acessar o banco de dados, para lidar com o BD, onde executaremos as leituras, escritas, atualizações, remoções...
--- npx prisma init --datasource-provider SQLite: Podemos inserir o tipo de banco de dados, que pode ser trocado posteriormente, pois no Prisma, precisamos apenas trocar a URL de conexão para mudar o tipo do banco de dados e gerar as migrations, alterações em código não precisam ser feitas. - criará "prisma/schema.prisma" e ".env" 

<!-- Prisma - schema.prisma -->
Possuí uma sintaxe própria do Prisma, para definir as tabelas, relacionamentos e campos do nosso banco de dados.
Depois, converterá em linguagem específica (SQL) para criar a estrutura no banco de dados em si.

<!-- Prisma - migration -->
---npx prisma migrate dev: Faz a leitura do 'schema.prisma' e verifica quais as ultimas alterações desde a última visita, semelhante ao commit para o Git. Com isso:

" The following migration(s) have been created and applied from new schema changes:
      migrations/
        └─ 20250603155539_create_users/
          └─ migration.sql

Your database is now in sync with your schema.  "

---npx prisma studio - visualização

<!-- nookies - biblioteca para cookies no next -->
1. npm i nookies
2. npm i @types/cookie -D
---

<!-- Autenticação -->
Neste projeto foi utilizado o protocolo de autenticação OAuth.

Com ele, o usuário autoriza o acesso a determinados dados da sua conta em um provedor (como o Google), sem precisar compartilhar sua senha.

O fluxo funciona assim:
  1. O usuário é redirecionado para a página de login do Google.
  2. Ele concede as permissões solicitadas.
  3. O Google redireciona de volta para a aplicação com um token de acesso, permitindo que a aplicação se comunique com a API do Google em nome do usuário.

A biblioteca utilizada foi o NextAuth.js, que é ideal para aplicações Next.js com front-end e back-end integrados.

<!-- Criando oAuth com Google -->
Configuração necessária pelo lado da Google, criada a aplicação na Google Cloud 
.ENV configurado com GOOGLE_CLIENT_ID e GOOGLE_CLIENT_SECRET