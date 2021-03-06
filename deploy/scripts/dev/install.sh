#!/usr/bin/env sh
helm install draco-web ./deploy/helm/draco-web \
  --values ./deploy/helm/values/dev/values.yaml \
  --set timestamp="$(date)" \
  --namespace dev
