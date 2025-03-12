#!/usr/bin/env bash

podman build -t localsearch .

ln -s "$(pwd)/localsearch.container" ~/.config/containers/systemd/localsearch.container
systemctl --user daemon-reload
