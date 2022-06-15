import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link className='rounded-full ' href='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xNjQuNDY5ODQsODMuOTg0MTZjLTEuODY3OTIsLTIuNTgzNDQgLTQ2LjI4MTc2LC02My4zNDQxNiAtOTIuMjI5ODQsLTYzLjM0NDE2Yy0zNi4wNDA4OCwwIC02NS4zNiwyOS4zMTkxMiAtNjUuMzYsNjUuMzZjMCwzNi4wNDA4OCAyOS4zMTkxMiw2NS4zNiA2NS4zNiw2NS4zNmM0NS45NDgwOCwwIDkwLjM2MTkyLC02MC43NjA3MiA5Mi4yMjk4NCwtNjMuMzQ0MTZjMC44NjY4OCwtMS4yMDQgMC44NjY4OCwtMi44Mjc2OCAwLC00LjAzMTY4ek05OS43NiwxMTMuNTJoLTU1LjA0YzAsLTEzLjc2IDE3LjQwNjQsLTExLjgzMzYgMjAuMDcyNCwtMTkuMDE2MzJjMC4yMjAxNiwtMi40NTk2IDAuMTM3NiwtNC4xNzI3MiAwLjEzNzYsLTYuNDE5MDRjLTEuMTE4LC0wLjU4NDggLTMuMTkyMzIsLTQuMzEwMzIgLTMuNTI2LC03LjQ1NDQ4Yy0wLjg3Mzc2LC0wLjA3MjI0IC0yLjI1MzIsLTAuOTI1MzYgLTIuNjU5MTIsLTQuMjk2NTZjLTAuMjE2NzIsLTEuODA5NDQgMC42NTAxNiwtMi44Mjc2OCAxLjE3NjQ4LC0zLjE0NzZjLTIuOTU4NCwtMTEuMzg5ODQgLTEuMzI3ODQsLTIxLjMzODMyIDEyLjE3MDcyLC0yMS41ODZjMy4zNzQ2NCwwIDUuOTcxODQsMC45MDEyOCA2Ljk4NjY0LDIuNjgzMmM5Ljg1MjE2LDEuMzY5MTIgNi44OTM3NiwxNC42MiA1LjQ2OTYsMTguOTAyOGMwLjUyOTc2LDAuMzE5OTIgMS4zOTMyLDEuMzM4MTYgMS4xNzY0OCwzLjE0NzZjLTAuNDA1OTIsMy4zNzEyIC0xLjc4MTkyLDQuMjI0MzIgLTIuNjU5MTIsNC4yOTY1NmMtMC4zMzcxMiwzLjE0NzYgLTIuMzI4ODgsNi44Njk2OCAtMy40NDM0NCw3LjQ1NDQ4YzAsMi4yNDYzMiAtMC4wODI1NiwzLjk2Mjg4IDAuMTM3Niw2LjQxOTA0YzIuMzU5ODQsNi4zMzY0OCAxOC42NzIzMiw1LjM1NjA4IDIwLjAwMDE2LDE3LjM5OTUyeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+' rel="icon" />
        {/* <link className='rounded-full ' href='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNlY2YwZjEiPjxwYXRoIGQ9Ik04Ni4xMDAzMywxNC4zMzMzM2MtMzkuNTgxNSwwIC03MS42NjY2NywzMi4wODUxNyAtNzEuNjY2NjcsNzEuNjY2NjdjMCwzOS41ODE1IDMyLjA4NTE3LDcxLjY2NjY3IDcxLjY2NjY3LDcxLjY2NjY3YzM5LjU4MTUsMCA3MS42NjY2NywtMzIuMDg1MTcgNzEuNjY2NjcsLTcxLjY2NjY3YzAsLTM5LjU4MTUgLTMyLjA4NTE3LC03MS42NjY2NyAtNzEuNjY2NjcsLTcxLjY2NjY3ek0xMDkuMjUyMjUsMTA4LjgzNjU4YzIuMjMyNDIsMS45NjAwOCAyLjQ1NDU4LDUuMzU3MDggMC40OTQ1LDcuNTg1OTJjLTEuMDYwNjcsMS4yMDc1OCAtMi41NDc3NSwxLjgyNzUgLTQuMDQyLDEuODI3NWMtMS4yNTc3NSwwIC0yLjUyMjY3LC0wLjQ0MDc1IC0zLjU0MDMzLC0xLjMzNjU4bC0yNi45MDcyNSwtMjMuNjIxMzNsMC4wMDM1OCwxOS42NDM4M2MwLDIuOTcwNTggLTIuNDA4LDUuMzc1IC01LjM3NSw1LjM3NWMtMi45NjcsMCAtNS4zNzUsLTIuNDA0NDIgLTUuMzc1LC01LjM3NWwtMC4wMTA3NSwtNTcuMzUxMjVjMCwtMi45NjcgMi40MDQ0MiwtNS4zNzUgNS4zNzE0MiwtNS4zNzVjMC4wMDM1OCwwIDAuMDAzNTgsMCAwLjAwMzU4LDBjMi45NjcsMCA1LjM3NSwyLjQwNDQyIDUuMzc1LDUuMzc1bDAuMDAzNTgsMTkuNjMzMDhsMjYuOTAzNjcsLTIzLjcwMzc1YzIuMjIxNjcsLTEuOTYzNjcgNS42MjIyNSwtMS43NDUwOCA3LjU4MjMzLDAuNDgwMTdjMS45NjM2NywyLjIyODgzIDEuNzQ4NjcsNS42MjIyNSAtMC40ODAxNyw3LjU4NTkybC0yOC4wMDM3NSwyNC42Nzg0MnoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==' rel="icon" /> */}
        <title>Koushik</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300&family=Great+Vibes&family=Playfair+Display:ital@1&family=Tangerine:wght@700&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300&family=Great+Vibes&family=Playfair+Display:ital@1&display=swap" rel="stylesheet"/>
      </Head>
      <body className=' bg-dark-200 dark:bg-gradient-to-br dark:from-dark-200 dark:to-dark-700 dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}