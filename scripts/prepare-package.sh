#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd ${MY_DIR}/..

source configuration.sh

export SNAPSHOT_K8S_API_SCHEMA_DIR=${MY_DIR}/assets/k8s-api-json-schema
rm -rf ${SNAPSHOT_K8S_API_SCHEMA_DIR}
mkdir -p ${SNAPSHOT_K8S_API_SCHEMA_DIR}

cp -rf ${K8S_API_SCHEMA_DIR}/*.json ${SNAPSHOT_K8S_API_SCHEMA_DIR}