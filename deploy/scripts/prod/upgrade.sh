#!/usr/bin/env sh
helm upgrade draco-web ./deploy/helm/draco-web \
  --values=./deploy/helm/values/prod/values.yaml \
  --set timestamp="$(date)" \
  --namespace=default
