### Kompose

kubernetes-incubator/kompose: Tool to move from `docker-compose` to Kubernetes  https://github.com/kubernetes-incubator/kompose

```

kompose convert -f docker-compose.yaml

kubectl create -f .

minikube service list

minikube dashboard

kompose delete -f .

deployment "frontend" deleted
service "frontend" deleted
deployment "redis-master" deleted
service "redis-master" deleted
deployment "redis-slave" deleted
service "redis-slave" deleted

```

### OpneCompose

* https://github.com/redhat-developer/opencompose

```
curl -L https://github.com/redhat-developer/opencompose/releases/download/v0.2.0/opencompose-windows-amd64.exe -o opencompose.exe


.\opencompose.exe convert -f .\hello-nginx-external.yaml
ERROR: could not unmarshal data for file '.\hello-nginx-external.yaml': failed to unmarshal OpenCompose:
excess keys in "Container": []string{"name"}
```

### Install 0.19.1 Windows/amd64

Download the minikube-installer.exe file, and execute the installer.

* https://github.com/kubernetes/minikube/releases/tag/v0.19.1
* Oracle VM VirtualBox  https://www.virtualbox.org/

Starting local Kubernetes cluster

```
C:\Users> minikube config set vm-driver virtualbox
C:\Users> minikube start
Starting local Kubernetes cluster...
Starting VM...
SSH-ing files into VM...
Setting up certs...
Starting cluster components...
Connecting to cluster...
Setting up kubeconfig...
Kubectl is now configured to use the cluster.

C:\Users> minikube dashboard

```

Running the command kubectl 

```
D:\git\dltdojo\dockerfiles\kubernetes> 

> kubectl create -f nginx-deployment.yaml
deployment "nginx-deployment" created

> kubectl get pods
NAME                                READY     STATUS    RESTARTS   AGE
nginx-deployment-3646295028-c73zl   1/1       Running   0          1m
nginx-deployment-3646295028-hd8lw   1/1       Running   0          1m
nginx-deployment-3646295028-n8r04   1/1       Running   0          1m

> kubectl expose deployment/nginx-deployment --port=80 --type=LoadBalancer

> minikube service list
|-------------|----------------------|-----------------------------|
|  NAMESPACE  |         NAME         |             URL             |
|-------------|----------------------|-----------------------------|
| default     | kubernetes           | No node port                |
| default     | nginx-deployment     | http://192.168.99.100:31495 |
| kube-system | kube-dns             | No node port                |
| kube-system | kubernetes-dashboard | http://192.168.99.100:30000 |
|-------------|----------------------|-----------------------------|

> kubectl delete deployment/nginx-deployment
deployment "nginx-deployment" deleted
> minikubu stop

```


### Install minikube 0.18.0

* https://rominirani.com/tutorial-getting-started-with-kubernetes-on-your-windows-laptop-with-minikube-3269b54a226
* Releases · kubernetes/minikube  https://github.com/kubernetes/minikube/releases

```
D:\TEST>minikube-windows-amd64.exe version
========================================
kubectl could not be found on your path.  kubectl is a requirement for using minikube
To install kubectl, please do the following:

download kubectl from:
https://storage.googleapis.com/kubernetes-release/release/v1.6.0/bin/windows/amd64/kubectl.exe
Add kubectl to your system PATH

To disable this message, run the following:

minikube config set WantKubectlDownloadMsg false
========================================
minikube version: v0.18.0
```

Always testing minikube on the C: drive

* Minikube work from hard drive other than C: on windows · Issue #622 · kubernetes/minikube  https://github.com/kubernetes/minikube/issues/622
* minikube start - Error starting host, machine does not exist · Issue #459 · kubernetes/minikube https://github.com/kubernetes/minikube/issues/459

```
C:\Users> minikube config set vm-driver virtualbox
C:\Users> minikube start
Starting local Kubernetes cluster...
Starting VM...
SSH-ing files into VM...
Setting up certs...
Starting cluster components...
Connecting to cluster...
Setting up kubeconfig...
Kubectl is now configured to use the cluster.

C:\Users> kubectl version
Client Version: version.Info{Major:"1", Minor:"6", GitVersion:"v1.6.0", GitCommit:"fff5156092b56e6bd60fff75aad4dc9de6b6ef37", GitTreeState:"clean", BuildDate:"2017-03-28T16:36:33Z", GoVersion:"go1.7.5", Compiler:"gc", Platform:"windows/amd64"}
Server Version: version.Info{Major:"1", Minor:"6", GitVersion:"v1.6.0", GitCommit:"fff5156092b56e6bd60fff75aad4dc9de6b6ef37", GitTreeState:"dirty", BuildDate:"2017-04-07T20:46:46Z", GoVersion:"go1.7.3", Compiler:"gc", Platform:"linux/amd64"}

C:\Users> kubectl cluster-info
Kubernetes master is running at https://192.168.99.100:8443
KubeDNS is running at https://192.168.99.100:8443/api/v1/proxy/namespaces/kube-system/services/kube-dns
kubernetes-dashboard is running at https://192.168.99.100:8443/api/v1/proxy/namespaces/kube-system/services/kubernetes-dashboard
```

Start Kubernetes Dashboard

```
C:\Users> minikube dashboard
```

Run dltdojo-abe

* Getting Started with Kubernetes via Minikube – Claudio Procida https://medium.com/@claudiopro/getting-started-with-kubernetes-via-minikube-ada8c7a29620

```
C:\Users>kubectl run hello-minikube --image=gcr.io/google_containers/echoserver:1.4 --port=8080
deployment "hello-minikube" created

C:\Users>kubectl get deployments
NAME             DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
hello-minikube   1         1         1            1           1m

C:\Users>kubectl expose deployment hello-minikube --type=NodePort
service "hello-minikube" exposed

C:\Users>kubectl get services
NAME             CLUSTER-IP   EXTERNAL-IP   PORT(S)          AGE
hello-minikube   10.0.0.11    <nodes>       8080:30401/TCP   20s
kubernetes       10.0.0.1     <none>        443/TCP          53m

C:\Users>minikube service hello-minikube --url
http://192.168.99.100:30401

C:\Users>kubectl run --image=nginx nginx-app --port=80 --env="DOMAIN=cluster"
deployment "nginx-app" created

C:\Users>kubectl expose deployment nginx-app --port=80 --name=nginx-http
service "nginx-http" exposed

C:\Users>kubectl get services
NAME             CLUSTER-IP   EXTERNAL-IP   PORT(S)          AGE
hello-minikube   10.0.0.11    <nodes>       8080:30401/TCP   9m
kubernetes       10.0.0.1     <none>        443/TCP          1h
nginx-http       10.0.0.197   <none>        80/TCP           22s

C:\Users>kubectl get deployments
NAME             DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
hello-minikube   1         1         1            1           13m
nginx-app        1         1         1            1           1m

C:\Users>kubectl get po
NAME                             READY     STATUS    RESTARTS   AGE
hello-minikube-938614450-gl19z   1/1       Running   0          16m
nginx-app-4119733677-w39cl       1/1       Running   0          4m

C:\Users>kubectl run abe --image=y12docker/dltdojo-abe -- /start.sh
deployment "abe" created

C:\Users>kubectl get po
NAME                             READY     STATUS    RESTARTS   AGE
abe-1202384274-7jm19             1/1       Running   0          1m
hello-minikube-938614450-gl19z   1/1       Running   0          34m
nginx-app-4119733677-w39cl       1/1       Running   0          22m

C:\Users>kubectl exec -ti abe-1202384274-7jm19 -- bash
bash-4.3# bitcoin-cli getinfo
{
  "version": 130200,
  "protocolversion": 70015,
  "walletversion": 130000,
  "balance": 0.00000000,
  "blocks": 0,
  "timeoffset": 0,
  "connections": 0,
  "proxy": "",
  "difficulty": 4.656542373906925e-10,
  "testnet": false,
  "keypoololdest": 1493628505,
  "keypoolsize": 100,
  "paytxfee": 0.00000000,
  "relayfee": 0.00001000,
  "errors": ""
}
bash-4.3# bitcoin-cli generate 1
[
  "2760abf3832dc62fd3a4c54b3d82ec3d7076a1a6c03d4a1a18b25fd90310b455"
]
bash-4.3# exit
exit
```
