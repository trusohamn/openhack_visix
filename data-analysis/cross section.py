# -*- coding: utf-8 -*-
"""
Created on Sat Nov  2 10:00:42 2019

@author: Vlad Dobrovan
"""

import pandas as pd

''' Program splits the data on appropriate sector variables, does basic normalization and creates excel outputs. '''

# Formula for relative normalization (0-1): zi=xi−min(x)/max(x)−min(x) (used in excel)

sectors= {
         'Education':['gcb_bed','gcb_ped'],
         'Health':['gcb_bmed','gcb_pmed'],
         'Business':['wdi_firgifttax','gcb_btax','gcb_pb'],
         'Energy':['gcb_butil', 'wdi_acel'],
         'Media':['vdem_mecorrpt'],
         'Public':['gcb_pngo']
         }


df_variable=pd.read_excel('qog_std_cs_jan19.xlsx')

one_to_five_rankings=['gcb_pmed','gcb_ped','gcb_pb','gcb_pngo']
df_variable.rename({'cname':'Country','ccodealp':'CountryCode'}, axis=1, inplace=True)

for i in one_to_five_rankings:
    df_variable[i]=df_variable[i].apply(lambda x: x/5)
for i in ['wdi_acel', 'who_sanittot','epi_acsat','epi_ehwater','wdi_firgifttax']:
    df_variable[i]=df_variable[i].apply(lambda x: x/100)    

for sector, var in sectors.items():  
    cols=['Country','CountryCode'] + sectors[sector]
    df_variable[sectors[sector]].dropna(how='all', inplace=True)
    df_variable_x=df_variable[cols]
    output_file=f'{sector}_sector'+ '_{}.xlsx'.format(pd.datetime.today().strftime('20%y-%m-%d_%H_%M'))
    writer = pd.ExcelWriter(output_file, 'xlsxwriter')
    df_variable_x.to_excel(output_file, index=False)

