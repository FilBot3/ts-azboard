import * as azdev from 'azure-devops-node-api'

const orgUrl: string = 'https://dev.azure.com/bluekc'

const token: string = process.env.AZDO_API_PAT ?? 'notfilledin'

const authHandler = azdev.getPersonalAccessTokenHandler(token)
const connection = new azdev.WebApi(orgUrl, authHandler)

const coreApi = connection.getCoreApi()

coreApi.
