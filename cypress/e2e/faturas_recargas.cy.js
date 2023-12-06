/* eslint-disable linebreak-style */


// **************************************************

it('Deve listar as faturas da conta selecionada', () => {
  cy.request({
    method: 'GET',
    url: 'https://hml.api.veloe.com.br/faturas-recargas-bff/v1/faturas-recargas-bff/faturas',
    headers: { token: 'eyJraWQiOiJPYXV0aERvbWFpblZlbG9lMTJjUGVyZmlsYW1lbnRvIiwieDV0IjoiMWo0dWI1bl9LNVhYOXlJOTN5UjhKTzJEQlNnIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwOi8vaXAtMTAtMjAyLTEwLTIzOS5sb2NhbC52ZWxvZS5jb20uYnI6MTQxMDAvb2F1dGgyIiwiYXVkIjoiQ3VzdG9tZXIiLCJleHAiOjE3MDE4NzQzNTIsImp0aSI6InI2OVJlNHZNRThfM3JnNGU1QTMwb3ciLCJpYXQiOjE3MDE4NzA3NTIsInN1YiI6IjM5NjcxMjcyMDYxIiwidWlkIjoibGlwamhtbEBtYWlsc2FjLmNvbSIsIlNlc3Npb25DcmVhdGlvbiI6Ik5VTEwiLCJtYWlsIjoibGlwamhtbEBtYWlsc2FjLmNvbSIsImVtcGxveWVlbnVtYmVyIjoiTk9UX0ZPVU5EIiwiZGVzY3JpcHRpb24iOiJOT1RfRk9VTkQiLCJTeXN0ZW1Vc2VyIjoiZmFsc2UiLCJjbiI6IjM5NjcxMjcyMDYxIiwic24iOiJQSiBIbWwiLCJ1c2VyaWQiOiIzOTY3MTI3MjA2MSIsIlNlc3Npb25Db3VudCI6Ik5VTEwiLCJVc2VyR3JvdXAiOiJOVUxMIiwiY2xpZW50IjoiQ3VzdG9tZXJDbGllbnQxMmMiLCJzY29wZSI6WyJDdXN0b21lci5JbmZvIl0sImRvbWFpbiI6Ik9hdXRoRG9tYWluVmVsb2UxMmNQZXJmaWxhbWVudG8ifQ.lidGCa35kC_c3Cqj_Q6xEvQcM_ZGLdbl_UCQKBp8QaJisGDQ9WWmz-ogXtvhpx1KUHavv3L2jax8pnEnbLh01h2QgCPqH7LG4eYV3cZcVCGOekZlc26tZAJf94zAm5gNpWW8UT8BhCb5DGpR-aD0ZWTAjNmOiRLI5wADvEYvCA-AExdM1XxvhkWJaO5zMROGGEtzl18yfAYG46s8rHaEN8HWlYFUvI75uBdSdtfG9KXYMht0ok945bj-rsgQ06QxswLp75bXN3Q6f96sjtoF7s_DL_ph-qlw6sz42zzH_GRSkfQTjgKbEM5xGpLN13ni9IaoOkoPN1M9-VBdprPjgw',
      'x-tenant-id': '171096',
      authorization: 'Basic Q3VzdG9tZXJDbGllbnQxMmM6ZW9CWDYxaWc4Z0plTnVaRHpH',
      CustomerID: '1825542' },
    //failOnStatusCode: false,
  }).then(res => {
    expect(res.status).to.equal(200)
  })
})
// **************************************************

it('Deve listar as infos de recargas da conta selecionada', () => {
  cy.request({
    method: 'GET',
    url: 'https://hml.api.veloe.com.br/faturas-recargas-bff/v1/faturas-recargas-bff/recargas',
    headers: { token: 'eyJraWQiOiJPYXV0aERvbWFpblZlbG9lMTJjUGVyZmlsYW1lbnRvIiwieDV0IjoiMWo0dWI1bl9LNVhYOXlJOTN5UjhKTzJEQlNnIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwOi8vaXAtMTAtMjAyLTEwLTIzOS5sb2NhbC52ZWxvZS5jb20uYnI6MTQxMDAvb2F1dGgyIiwiYXVkIjoiQ3VzdG9tZXIiLCJleHAiOjE3MDE4NzQzNTIsImp0aSI6InI2OVJlNHZNRThfM3JnNGU1QTMwb3ciLCJpYXQiOjE3MDE4NzA3NTIsInN1YiI6IjM5NjcxMjcyMDYxIiwidWlkIjoibGlwamhtbEBtYWlsc2FjLmNvbSIsIlNlc3Npb25DcmVhdGlvbiI6Ik5VTEwiLCJtYWlsIjoibGlwamhtbEBtYWlsc2FjLmNvbSIsImVtcGxveWVlbnVtYmVyIjoiTk9UX0ZPVU5EIiwiZGVzY3JpcHRpb24iOiJOT1RfRk9VTkQiLCJTeXN0ZW1Vc2VyIjoiZmFsc2UiLCJjbiI6IjM5NjcxMjcyMDYxIiwic24iOiJQSiBIbWwiLCJ1c2VyaWQiOiIzOTY3MTI3MjA2MSIsIlNlc3Npb25Db3VudCI6Ik5VTEwiLCJVc2VyR3JvdXAiOiJOVUxMIiwiY2xpZW50IjoiQ3VzdG9tZXJDbGllbnQxMmMiLCJzY29wZSI6WyJDdXN0b21lci5JbmZvIl0sImRvbWFpbiI6Ik9hdXRoRG9tYWluVmVsb2UxMmNQZXJmaWxhbWVudG8ifQ.lidGCa35kC_c3Cqj_Q6xEvQcM_ZGLdbl_UCQKBp8QaJisGDQ9WWmz-ogXtvhpx1KUHavv3L2jax8pnEnbLh01h2QgCPqH7LG4eYV3cZcVCGOekZlc26tZAJf94zAm5gNpWW8UT8BhCb5DGpR-aD0ZWTAjNmOiRLI5wADvEYvCA-AExdM1XxvhkWJaO5zMROGGEtzl18yfAYG46s8rHaEN8HWlYFUvI75uBdSdtfG9KXYMht0ok945bj-rsgQ06QxswLp75bXN3Q6f96sjtoF7s_DL_ph-qlw6sz42zzH_GRSkfQTjgKbEM5xGpLN13ni9IaoOkoPN1M9-VBdprPjgw',
      TenantID: '195965',
      authorization: 'Basic Q3VzdG9tZXJDbGllbnQxMmM6ZW9CWDYxaWc4Z0plTnVaRHpH',
      CustomerID: '1890786' },
    failOnStatusCode: false,
  }).then(res => {
    expect(res.status).to.equal(400)
    console.log(res)
  })
})

// **************************************************

it('Deve listar as gateways de pagamento - status 200', () => {
  cy.request({
    method: 'GET',
    url: 'https://hml.api.veloe.com.br/faturas-recargas-bff/v1/faturas-recargas-bff/gateway-pagamento',
    headers: { token: 'eyJraWQiOiJPYXV0aERvbWFpblZlbG9lMTJjUGVyZmlsYW1lbnRvIiwieDV0IjoiMWo0dWI1bl9LNVhYOXlJOTN5UjhKTzJEQlNnIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwOi8vaXAtMTAtMjAyLTEwLTIzOS5sb2NhbC52ZWxvZS5jb20uYnI6MTQxMDAvb2F1dGgyIiwiYXVkIjoiQ3VzdG9tZXIiLCJleHAiOjE3MDE4NzQzNTIsImp0aSI6InI2OVJlNHZNRThfM3JnNGU1QTMwb3ciLCJpYXQiOjE3MDE4NzA3NTIsInN1YiI6IjM5NjcxMjcyMDYxIiwidWlkIjoibGlwamhtbEBtYWlsc2FjLmNvbSIsIlNlc3Npb25DcmVhdGlvbiI6Ik5VTEwiLCJtYWlsIjoibGlwamhtbEBtYWlsc2FjLmNvbSIsImVtcGxveWVlbnVtYmVyIjoiTk9UX0ZPVU5EIiwiZGVzY3JpcHRpb24iOiJOT1RfRk9VTkQiLCJTeXN0ZW1Vc2VyIjoiZmFsc2UiLCJjbiI6IjM5NjcxMjcyMDYxIiwic24iOiJQSiBIbWwiLCJ1c2VyaWQiOiIzOTY3MTI3MjA2MSIsIlNlc3Npb25Db3VudCI6Ik5VTEwiLCJVc2VyR3JvdXAiOiJOVUxMIiwiY2xpZW50IjoiQ3VzdG9tZXJDbGllbnQxMmMiLCJzY29wZSI6WyJDdXN0b21lci5JbmZvIl0sImRvbWFpbiI6Ik9hdXRoRG9tYWluVmVsb2UxMmNQZXJmaWxhbWVudG8ifQ.lidGCa35kC_c3Cqj_Q6xEvQcM_ZGLdbl_UCQKBp8QaJisGDQ9WWmz-ogXtvhpx1KUHavv3L2jax8pnEnbLh01h2QgCPqH7LG4eYV3cZcVCGOekZlc26tZAJf94zAm5gNpWW8UT8BhCb5DGpR-aD0ZWTAjNmOiRLI5wADvEYvCA-AExdM1XxvhkWJaO5zMROGGEtzl18yfAYG46s8rHaEN8HWlYFUvI75uBdSdtfG9KXYMht0ok945bj-rsgQ06QxswLp75bXN3Q6f96sjtoF7s_DL_ph-qlw6sz42zzH_GRSkfQTjgKbEM5xGpLN13ni9IaoOkoPN1M9-VBdprPjgw',
      'x-tenant-id': '171096',
      authorization: 'Basic Q3VzdG9tZXJDbGllbnQxMmM6ZW9CWDYxaWc4Z0plTnVaRHpH',
      CustomerID: '1825542' },
    failOnStatusCode: false,
  }).then(res => {
    expect(res.status).to.equal(200)
  })
})

// **************************************************
