library(Rbitcoin)
wallet <- blockchain.api.process('15Mb2QcgF3XDMeVn6M7oCG6CQLw4mkedDi')
seed <- '1NfRMkhm5vjizzqkp2Qb28N7geRQCa4XqC'
genesis <- '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa'
singleaddress <- blockchain.api.query(method = 'Single Address', bitcoin_address = seed, limit=100)
txs <- singleaddress$txs

bc <- data.frame()
for (i in 1:nrow(txs)) {
  t <- txs[i,]
  hash <- t$hash
  for (inputs in t$inputs) {
    from <- inputs$prev_out$addr
    str(from, max.level=1)
    for (out in t$out) {
      to <- out$addr
      va <- out$value
      str(to, max.level=1)
      str(va, max.level=1)
      data <- data.frame(from=from,to=to,value=va, stringsAsFactors=F)
      str(data, max.level=1)
    }
  }
}
