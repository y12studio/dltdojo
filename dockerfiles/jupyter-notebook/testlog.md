### 2017-02-18T07:45:36+0800
```
$ docker build -t y12docker/dltdojo-pandas-notebook .
$ docker images | grep pandas
y12docker/dltdojo-pandas-notebook                                                                                                                         latest                          387a83ef1849        22 seconds ago      4.3 GB
$ docker run -it --rm -p 8888:8888 y12docker/dltdojo-pandas-notebook

```
### 2017-02-17T12:44:56+0800
```
$ docker pull jupyter/datascience-notebook
$ docker images | grep jupyter
jupyter/datascience-notebook                                                                                                                              latest                          e2bd4f58f5e4        3 weeks ago         6.65 GB
$ docker run -it --rm -p 8888:8888 jupyter/datascience-notebook
[I 05:07:45.501 NotebookApp] Writing notebook server cookie secret to /home/jovyan/.local/share/jupyter/runtime/notebook_cookie_secret
[W 05:07:46.101 NotebookApp] WARNING: The notebook server is listening on all IP addresses and not using encryption. This is not recommended.
[I 05:07:46.136 NotebookApp] Serving notebooks from local directory: /home/jovyan/work
[I 05:07:46.136 NotebookApp] 0 active kernels
[I 05:07:46.136 NotebookApp] The Jupyter Notebook is running at: http://[all ip addresses on your system]:8888/?token=fca91c9d554ef7dfcd8116944f6fd350f98c782417a4d025
[I 05:07:46.137 NotebookApp] Use Control-C to stop this server and shut down all kernels (twice to skip confirmation).
[C 05:07:46.137 NotebookApp]

    Copy/paste this URL into your browser when you connect for the first time,
    to login with a token:
        http://localhost:8888/?token=fca91c9d554ef7dfcd8116944f6fd350f98c782417a4d025

```
read_csv
```
%matplotlib inline
import pandas as pd
dataurl='https://www.quandl.com/api/v1/datasets/BCHAIN/MKPRU.csv?trim_start=2013-01-01&trim_end=2015-05-01'
data=pd.read_csv(dataurl)
data['7MA'] = data['Value'].rolling(window=7,center=False).mean()
data['30MA'] = data['Value'].rolling(window=30,center=False).mean()
print(data.head(50))
```
plot
```
import matplotlib.pyplot as plt
data.plot()
plt.show()
```
