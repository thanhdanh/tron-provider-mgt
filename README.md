# tron-provider-mgt
A demo project about management all current tron providers

## How to set Tron provider

Set with Tronrid
```
curl -X POST -H "Content-Type: application/json" -d '{"providerName": "NodeWithTrongrid"}' http://localhost:3000/api/v1/best-tron-provider
```

Set with TokenView
```
curl -X POST -H "Content-Type: application/json" -d '{"providerName": "NodeWithTokenview"}' http://localhost:3000/api/v1/best-tron-provider
```