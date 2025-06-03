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