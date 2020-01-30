#!/usr/bin/env sh
helm upgrade draco-web ./deploy/helm/draco-web \
  --values=./deploy/helm/values/dev/values.yaml \
  --set=spec.draco-web.metadata.labels.date=`date +'%s'` \
  --namespace=dev
