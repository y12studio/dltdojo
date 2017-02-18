
# coding: utf-8

# In[1]:

get_ipython().magic('matplotlib inline')
import pandas as pd
dataurl='https://www.quandl.com/api/v1/datasets/BCHAIN/MKPRU.csv?trim_start=2013-01-01&trim_end=2015-05-01'
data=pd.read_csv(dataurl)
data['7MA'] = data['Value'].rolling(window=7,center=False).mean()
data['30MA'] = data['Value'].rolling(window=30,center=False).mean()
print(data.head(50))


# In[2]:

import matplotlib.pyplot as plt
data.plot()
plt.show()


# In[ ]:



