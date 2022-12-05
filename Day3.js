const sack = [
  "fzmmmfwDWFzlQQqjCQjDGnqq",
  "tJHJvLJVVttNsvTtTvgHHSVwCsQRQQZCZZMqQMQBnqBMQs",
  "LgThNJhNSgTJVgvgtghPhbpfWzfbwfPmpprb",
  "lDLnSnLZRjmWrlhrFF",
  "PffQJNqJbPZbpmjrrCVNFmCh",
  "qzbcbqfMfZMTfQTqqzzTPPLMHgBBBtHRStvgHRDBnSRL",
  "WPZfJlZZCMwwZPWCwWzVHQhsshVSsfNQHdvQNN",
  "FLGDGGnGdVjQQQDQ",
  "ccFFbggLnRcLFRtFBmnJzdZZzZBMpwJlZMppMp",
  "RZsnCZssCnDccJCnfcQfHTdzMzhdLdMTqdRqpRLwqq",
  "tNrGNrrvGhTThQqw",
  "rrFStPgrFWWgvmPgQjtmNtmJcfJcsJsZblDZfbfHDFHnfl",
  "RdTfgbbPbJWDDqRvsDsmVG",
  "NSQZLQZHpFGLqnLszrJm",
  "ZMSNMHhNZMMSQwhQJWPBJCbhbcgtgfcJ",
  "qZfqPvLnnZGpGpCJlvsMsMlHJJHB",
  "mTWFFFTTtVSJMzzjWgSH",
  "RbVdtdFtcrmbRQDDVHDQTbDNwLPLfnqZnhZhQnNwfNqnnn",
  "nhHfSGHGThhZjnhrrSnsSczdzlfzzdQQVzRNFNcFdl",
  "JJvCDvmCbtvpvbMmDvLbCJpmqdVVVcMcNGzRcNFcRRzRclQd",
  "vwDCwtLmwLBDJmCHHjHHWGZHBnsnnj",
  "QWTMqZhThbTbLwtGBrQfQQNr",
  "jdzSSccVPPcgcLrDBtDVwCfNNC",
  "vcBgcmssccplTnnTqsMhWW",
  "FlcwZhBhGZhFJnGtZZFwlGsWRLHdWqMzPjWRLTLJHHjdWq",
  "vfmrmbpfpMfzjHjfdM",
  "VCSmVpmrNDMZhSMcsFnh",
  "nHqQVtVZGGwwwnSF",
  "fMBBBWCsCfMMbWfbsGmGzFjQGQFCPhFQhF",
  "fbcsWpJRsWlcNVLtqtLLQcZQ",
  "rgNJdfNJpgpJVMMVfmfVJgCtCTqqqzwTqrBsTswcCCss",
  "lFLHGWLvHQFhnQFhbFnbHWWPBtwqzBPTcsPTswZCPBGCTC",
  "QQtbRtLhtjgdfMRMDV",
  "jTRhJpGhQPfPLsDhWh",
  "wVVMbqbHwVwwMplHWfsfNmWcSLqcLmSs",
  "lVCZlHnwHdRpRGvZTBGJ",
  "csppppDDbGLbSqndFHHNdHsH",
  "lVTlgWgjzCzfgvfggZWWlnHPPBHrSCqBmrSBrHHBnF",
  "QFgvFfjTvZjzlvVTWljvTtMbLcccbRRMbwLMMLQLbw",
  "tjhLjLJzpJpwjsqqfQqNrNfRnsRR",
  "WvwGBPwWZZrnbBNrNnnC",
  "PDvGVTgvTMGvZTGTPvWDZVJjljtLzhtmLlJjwJVJLm",
  "WbzpSNswNWszwSLgSNMcrrBfPJJcfsHMrvMv",
  "CFllhlGFDVFRCmhQDlDTBBcvgBCTcHPHrfrHTJ",
  "qGRgVFhDDZmDnDqhgQFGqzwtzSjddwZbzwpLNzjpdS",
  "FlpZrQSJJmQpSpqlQgbbRZCgGCZdDdbNdd",
  "WswHfjfnhWPFDsFRDcbBbR",
  "WjHvjjWTfTvHFjzvPnPtttVTTJVLtJSpmtlltp",
  "tnjrnnnnhNlPBtbbcWpZScpjbZSz",
  "wmsFqfqqqGHTLbzpLLbgzMcH",
  "FGJqsmQGRVFwwQJschPdhPrBndBhtPhrQQ",
  "dRdJRfTnCRNlJjPBDmBJsbBDzm",
  "wSFWSgGVSLwpFhpLhQjzgPzbtDPDbPBsztrP",
  "WMGvVMLLBCclNHHRlM",
  "gfSffQBDBtZvwwpWDHcbwb",
  "JnCmmJCRmztsVPJRFjFchcGGWFWcGcHFvGLvHF",
  "VCPzJnsPVCjtPjdMsMdmVmMBfgTZBTMfSfZSSlfNNgSSfg",
  "lwHJSVZHWWVwJQwbbVVtwWVVdpdPfRfgDLPZLTZLDLgRDTZL",
  "hhBrBqRcnhsFFfddmdmmCmmppn",
  "MNNBBRRshNHbtVMzQJMM",
  "NBsSNtLNTtNsvlTBBRLgFSCbFmbHFCFhgcghSm",
  "WJWWDdVzDZJjDJQcCDHmmhCnmHmHFm",
  "zQVdQZQwqVQHjqzWWWdHpzMwGMBlGLLtTvRvRNsMwwNN",
  "ZCztttSjGSqRZgRPDNQQNr",
  "hLvmHshLmLcFwwhhwLqMVRRRJQQVNnRJMVRDNNRr",
  "HFhTpFqqLcssmqmFftblBSjCjStjbGWBfj",
  "crffjHDfrQfnfpLPgbgP",
  "TmFvFCmFTFFCtNsmMsRvlRTpPbLGMnGSngPppShGpbdgGJ",
  "vmslmwTNmtstzFsCvRFrHBrDZzcQnWqcDDHqQB",
  "LQLPVLGdGrRPRhHgwMhllhhs",
  "ZbSZTNqSZfNqNCtSSmTttbpSWMlzWlslpWHsWgJWhwJzBMlz",
  "bqjqqFFjHqTTTZTmSNbfmdrFQnDdcvVDGQDvvVnQnr",
  "mQdcdsSThlccSWhMgDnQnFtjQPtnjPNvtR",
  "zzsGwzrrHGBfZJGrJpDtNHFjvNvDvVRvNRtV",
  "wZBCGrbrszTbThcTcLcb",
  "gJDDDDcPQgQfNFPhhZGDDcZZSLVtlCqzsMlzqpszlsVtFSql",
  "bBrdwHTrHWTrTtzLlSMCCCprCq",
  "dnBwRvmnbmBvTpbnbWbTjZPQJhhchmJcmcQPfmGNcJ",
  "sjMGBLWGZjsLjJTBCCbvNrBCHC",
  "mpcRfDSSdqDdlRqdwRvFrHFbrHJFJVvDVrTb",
  "qvlgqwpcSQSfLjjhzgnMzsnP",
  "VgmLHHNRNVLNhsNgRHLltjjbCWnCWZbldntW",
  "GGMFPJqPwJGTvvCCdqdqlqCj",
  "rGwGrMQzJQBjJwTVHgDQDHcsfhVhVg",
  "pblwGBlFlWwwlgCSFwbLvQZFvzvZhzvmQTLLzJ",
  "HfqccHzVDNqLmmPmPPQZ",
  "MNtrVdDjHtrzGBdbGWCblw",
  "NNhnnLdnnfhdhVjvThvqVvCj",
  "tHtHBzBGWHBWGtPBSvvpGZVbSsTFjSqqVbscgjCjqqSC",
  "HBtzJHzzpDZpzMWpGPtWHvZwQmNLlmQnmNdfMmNRmwmlwd",
  "QzGqGwmbfTdPBgRRcgmMPC",
  "NtNZhljrNjrSrtltWlCJCJJfcVVRcJcRgPjf",
  "NlWSZZWsHhWWlprSSvZWHrWfQLLQbLGfQpQzzTFQbwzQdd",
  "gcwcSnccnwLRRSzcBQRvZZdvtNtvRbQJQv",
  "CqrCrrPsVstvbfDfbb",
  "TPlPVhWFFMGMnMjbcT",
  "gjjHGvcHgsgbSRQbRFWbjC",
  "ttnBTNSSfwBLzplWPPdlLlMPlMCQ",
  "TBZpDtmnnZNvhJDHggqqgS",
  "zfqzzGwMbllcJFqm",
  "NpHgpRZrRpSrSZLghlTjchNlNbhFmchb",
  "RHLWHgLBggZpHpgHRZrLgZLQCMzCfDWGMCzMQQGvPmvvfC",
  "bBWWlFFBBFdVMLfvsfjrtBvTrr",
  "qZsgNZzcwfjZrfPf",
  "gcnNNcDncsDGzggDnNRJnzHhmlMVSSbhVVVmMbbhVmMlGl",
  "dNNRQszqRhPNfddWltvDltMMNlnncv",
  "ZjZbpgpSpjpJgpCCpbFlTnSDTlzclDnMvnnMlT",
  "GCJpjbgzJCpwZwrHZrgHsRBwBVRRsqdqPhLBQqsP",
  "mnnVCcwGwnsVJntmfnBtBhTDzpzzpDWbDbsLLzpWDz",
  "FcHQdZSRHbhZZWWhrW",
  "dNljMlPPHdMPvRlHMRdjRRNBnwJfCVqwqqffCfCwtcBV",
  "ZGtGzBBGjvdZvLWLcrPVcZcsNVNmVpcH",
  "MnlgngCJMgJbhfDbCDPrHHVcNNrVpbVpVmmcVq",
  "lSPhlClftSSBvdGS",
  "jFhGqVCcPMMdGFqczBltzrtglrsrjBgB",
  "wWgwvfDZvnpmnHwHTfNpDbtRWbzltRlSrRlbBSbbzt",
  "fHJvJvvTwwJPhCccgQCM",
  "BrrrBVgNppDVBbTgDvqWdWZqWqwNmNNHvH",
  "sHsHnHlcJjFwMMFFvGdPvv",
  "HllCQCJQJsnjgtVTbBgpQrSr",
  "JgLPLwbhBrCbLBCJPFFlPFZRTNTZFRqlRq",
  "pmffSWvDcfSfGmvsNHZsTRsWllssbT",
  "vDddMmScdStfzGcpzzwhJwJwnCbLwwLLCwht",
  "sWSSvmsZsdZPWdLPRRsmSrrnlnvJjfnggfrgtfjnjr",
  "VWWWBhhHBBHtljMMfJHrrt",
  "WWqpWVqQqLNGRNZP",
  "QHjjGVBQpffpjqppQsSsQHWJcVVgJFWcFTWgNLggFPNc",
  "bzzmbzzZnZztFTNJWRqmqcgJ",
  "zDZlqMtbwhCBBfppvHDGvf",
  "BNTdfWJmzHNHHzzTdLCfCfCswQjRjljVsh",
  "FbGnrFnrPGSSvGPFZFFPGClLQpjQRwLjLplQhRlsrQ",
  "GbnvvgvPFwbwcnZMMGSFvFHdNHmTBNJNmmmDTJDBmWcT",
  "rBhRPrjJrRtTHtWHWcjc",
  "SDdGqmhdFSqblLGlHHfHWl",
  "DSSmFqhsFqFdzqFgwsVnvBQPPQPQVrnRsJMR",
  "NZcgQdmSwZgdPFPVNFPqqVVF",
  "hlhhjMhGjLhLDGDhCBJDCrRFRrqqpLPfpfPRVPprPm",
  "MlhjlMDDJTCmZddQQSTcTT",
  "zRddrwzwNhrzrtCLtLfsLrqflC",
  "MbSDZvVwGZpJwvHvBVfsqtjqlsPPfsqsfclb",
  "vJpvJvZTVgTdTgwdTn",
  "SZMsTTScDMqwtDDJ",
  "VWrbzFvnrvFQQtnhzdPFmfwGfqmGPfDwmfPJ",
  "rrLbrnVrLvVQpLHSHjsTBBjZBt",
  "bSrpbWpPpfzPRWrWvhJgddrcccgFnFss",
  "ljGNTCtMNLGQjNMjQMGtZJDDggcldcFcvhdFddnhhF",
  "vNCmQMjmvGzpRPPzzmfw",
  "BrbdcqcdSZRLQltNDqFpCpHH",
  "jnTzWsWjWjwTQnzMvFlCzNDhNhDCFGpHpH",
  "wmmvjVQMvwmsQMMwnsTPgVfgJcLcgfSbbBdBbJSdbSBS",
  "bJFbMdcmgFSFgmggJFcGwjRdzPWZWGDDGGRwGD",
  "hrttffCVVCTVlrttQwzRzwWTqRGDGwjTvG",
  "rfLChHhlpHrfHlnWlpWCpQVcMSmMmSJMmggbmMSMLFNSSs",
  "JRMBJfMJQJTcNNdD",
  "LHsLmspghmmpdwwwcwRCpPTT",
  "ttLLlRSlqjrMqFtZ",
  "VjtHVHtvVqttCdnGpHtplcshglNgprrlMhrcNghw",
  "WTWRvRWFZQLWDvDWzwscNfcflcshlshFlw",
  "WQmBQWPTVGnJPnvn",
  "cpRwjcQwVfQzQPQl",
  "BZgGDBZBsgWBDDJzlhfhJVmzVfmThm",
  "FqWDDGrGDFNqFrDZFnplNHnSwtnSRwRplN",
  "VMLVRhRLRfhfgGdfVdZWRdTHNqHCDTrSJNBBBgJNQgND",
  "swlcpsFPcPwzpSlTTDrNrQPQqQBBrH",
  "zsppFscsscmbzsFsbsZbMfRZdVdVMbVSWhLG",
  "NjcjHFjrHHFpjGtVtGWVZW",
  "fwPlsJqdndPnwJfQdfllwNtWGdtWMMbtbmbGWbMWGN",
  "CPlwnCwnwqClTJThTDzzFcHNSShrRh",
  "llqlsNsPNTpDNTDNNf",
  "cnvcWFjSrMSFnvWHTzTggHCcllzLpg",
  "wjJSSrFrrMMJGrFFFGjGvJnFswsRwRdmBdZbbqqsPtQqPZls",
  "jlclpqjcRqpjzjnVPgTmBmjCrC",
  "vGvsFNGGMZNvdGshQNJvJgbVMrnbrHVBgBTTbBBPBT",
  "SvJNGhvvvFdfQvFshSpqPqLzRRPctRcLWwlf",
  "LWSSqLVBbNqqLrWHLSHzWbbqQfFgZtmtJCQZzgtCFCQCCnJQ",
  "PlldGDGdjGsMPhssjPmQZFJQQZQghChZQJgv",
  "jwMcMpsPRRdsRjPwNpTWBLSBqVqTNJWT",
  "hWnMWgTffWFbMLfHnFMNfHgjtBSNRzjBBSzSBBcStdzBtz",
  "VGrVCGcVJswvPqJQjtQppBzpSwdjpt",
  "ZqqsCrmmsfmWcHhngg",
  "vnNnssMcZnlnlMFMsnFcZMGqJCbLbNLNqgLbgLNTCpLgwC",
  "hmjzBzHmRSfBfmqgQwpQQJbQJmwT",
  "WVVtthRtRdsdqtddZd",
  "LhZBLfZpmcsFpFzm",
  "vTRRwTRRPnCTwlFgmsczzLmgLvFs",
  "HVVVNCPPHTTtClRVNSnwLTHSQHBMMHrHWBhrQbJhWMMbZbJZ",
  "WPTnnDPjvPlChhJPcgCC",
  "DRQdBqsDQHQLHsBSmVLBcbwgCClbgCGlJghgmhgw",
  "dHMHQDVVRBsMWTNfWfzWzf",
  "PlgFPFFJGgJhhMGZwGbpBtQjjjStBttptlSb",
  "TTcDzmHvdvnDDzdTVnTDmSspWspQLpWmSsmqppsWtb",
  "CHVdcHvdbrwJCMPRGJwP",
  "BtBfcPfBhBGDhwHMlCmrNSCM",
  "dQdzLFTQnRnQVvgLnNlrCCpFrJCNrHJrwm",
  "zRVLZQRRvQGbwtWfbGZb",
  "PPcWcwMmCwwgnphCCLpjHp",
  "TtZsJTzzJSSSZJsdJtTrpblhRlHHHMngpLnnjHps",
  "ZDrvdFZtJqtStrZfMcGDVwfwffmWmP",
  "wCwSzzsHChhMVMhCPsSVLFWcdcWGPccRdjFdJjDR",
  "wBTTlBfgTlfpQQltmfgGGctRdGJJJFDJDDWdDt",
  "TppwnmlnQQqnlpqlmmwqlpphHqrVrZZSzshzShqzsrZVqs",
  "CCqCTgmdMCCCMMsWgqqnTCmJDGJcGGJfrGNGrSrrQpwFFSwG",
  "vZbDZvhDbzHzwNzwNGFNpNGc",
  "ZjBRVHPRtRLjLMWsCDlmgMdBmW",
  "MMsstRChwbChqRBqDrJNpNDsHdlNlJdr",
  "vLmPLfGGGGcTmFfTSgvPCvpZQlHHZpdrFJplQdZHQdHH",
  "GgPLmvGVSPfmfcfgBtjwCRwwjBbtVWbh",
  "LPPgFPccLPRswfsHfJgDsH",
  "bpbpTnCCrnmCtjBnTfDshHDwQVTwsDhQ",
  "BbrjnjnWCbBWZbPWzLDzDWdNlMWS",
  "pnncvLbcppBHgBRpddGd",
  "MtJfjVMtMmFJDjWSjVWzGdGgNQRBzBGNBMCGNB",
  "ZdDdsJFdDmtJmLTbwcvcbcnwZv",
  "FGsfFdNdhfbDdbhbLMhbNNTPJVCCZTLJnCRVJLPCRTVR",
  "qHjsczptHpmgHZBBVVTrrPzrBP",
  "lmpSlcglQtqWtcWjpQQfWsGDMhGFwdbGGNWhDv",
  "hNNNjMFMwthjFfvZBjFFvNSdnzSGGdGmHzHgGWSfHWSR",
  "ppJpcCVslpQJpJJDWHCHmRHHWWGSDn",
  "QbsrJQTQJVJNMNnZTZNZvZ",
  "NmRNLtGNmfcRrtDtrJCnWHJD",
  "blSzzSBssgfslWCCCJWFWHrsZF",
  "zTzbPBhMlTVSzMlMldlgMvvvvMLGcQRmqLLfvRwQ",
  "nnZsfsPLLfZfHLWdsZWZHdmcSpTcGmNScJTRGsTJmNcF",
  "gqVqDMgBlDbwwCqVbQFpTNFcTRSJNSrqqTSm",
  "jlMVMjljQBjMwhLfWWzhhfhZtmLH",
  "bfHwMvzwFBNpRjfZ",
  "nddcVJpGVpGqPVBBFBmhBhmsNRJs",
  "DWcPgPcPgnqCPlWWVWGMwbzwvQSSLbvgLpHHMz",
  "NMVqtdPVHgVlrfVrpnjCwNjjpCpNNpCb",
  "zhSvfWWzRfRLfvSpQjwbmmmvQvwwCD",
  "LBRRTRcLJSgqqMJlVVft",
  "GpgNzzSMGpGTrgzgMzJTrPgzjRwBdBlBbLRBjdBwVbLRVbSR",
  "sQWCfQcflhtQQcWCmsmlsbLnRdwqqBmmbBVbLVLwnB",
  "fCtQWFWDZFCQhCctFDsftNpzPPzZJpgJJNTgNlPZgH",
  "DqLtMSDLLttjdDSRdjZtdpdqVWFslFWrqWPqhwhfFwwCFw",
  "CvTbNvvTJNGHnVJwPfwFFFwsrh",
  "cQBzGBHnTQGgcNtdMMBpDBtCdtLL",
  "QsNDfdDNQsSTtrQZQtJJZC",
  "lLvRWMVMLzWbRjvVgVVGvmTtCrZBrTFFbmJCmsBCrr",
  "lljvlgpMGgRpsjsRlGGsMdqDdpDqNqfhqqSdncpqdP",
  "sVSJVmmtmsCCwschrbNMbcBs",
  "ZgLLfqvzzqgfdqHQLnTLfQQFhFMrhbNGBwgGbMlNcFclwN",
  "LTzqZrHHQvjLHnHdQTdTQvZQJjCpCJDPmCRRtCpStRRmVtmm",
  "ccQVcVHwnnDqNqSWNnVvqwcgJblgRslgmdGlssmGbQdddb",
  "rpFtPrzrMFZvZTLPpglhdssFshssJhsggG",
  "pTtLtBMjZLfHvNWqcBHf",
  "PZnSjnnsVfjfLLff",
  "crvccpglrtHfNbzbHLzmGN",
  "lptTLFFpdgvttFWltTclplDvhJMSMPhJPhChShPBZBMJhPMT",
  "mPSPdnhznPdhSmPGchJdFDtBhghgFgWpFBQhTBMg",
  "rHNNvbqHHHwZwMGMWtgtQMZQFQ",
  "wRqqRffvvNHwrHqrNqLvCrqvmPnzdsGJsSsSdSsLPVVPnjsn",
  "CzlngWpClJlzRJpDnpmzCndrhBcrhwcsBcLsNcsmLdQQ",
  "qqSjqFGTFbPFSPTVjcBcBsDdQrwBVLrNcc",
  "PtDDtZTvGDvFCMzZlRJCfWfJ",
  "vtQDpvpvVvvcSFrrljZZsVjFrV",
  "RqcTTRddRrlsjZrwrT",
  "zmbdRdMmMgbPDcGhGmnDpcQn",
  "gZqJRZRZdltFVGZQDZwV",
  "MCMSRHCMRHBBVtVCGwDCFGtD",
  "jcHsTMBNSSrBMjmMrcTMpRqpJggllnprqzRPzdlP",
  "mWSWHdmHWZWjBnGs",
  "TvchwtTfcTvhzwVGNtdrbjnnBnsnNr",
  "JTdwghvMzwfdcMVJqPmQFRPpCDJRJFFC",
  "DsHDCrszvvhHsshvsrrsgwdPpdLFgWLpbRpWFfMjWjWF",
  "BVJPJmPmGZVnfbVfMWpdLMWb",
  "cNGtnttqmJHNvNzDPPHN",
  "gpjmMQMrfmMntCSCNmSNCm",
  "vDRqphDhzHSdtqdCNH",
  "LFLLcbJRJLppFQlpMFfF",
  "SnSdvchzZZczndNvwcwnQrGfqrTTfhhTDgRGGLQQ",
  "lVWHWMmWmttsFBMLLqLTRRRqqDBGTf",
  "bsFPbFFssmFjWRmjVFjHbczvpZCwvwZccndpvzpzCP",
  "jzngbHrlHQllcbcTCtHGWtftGCHqWC",
  "JJgmsJRwFqChLGtqGs",
  "SmJmSmDdSPRwSMppJdPPwVvvzNQvjrNMNjMZZrQgZNgQ",
  "PvPlPcZPZFllzNzCDdhhdHjrpHNjHBHB",
  "VmgWtJWrqbQmqGDBdGQjjhBGdG",
  "tmbgggbgnMWnStttgnfnTzrCfPvFnccnPclT",
  "RQQbdSRdpprQSNVqqqfrffjvnjnJnhnVvHhBhVjJtjJz",
  "WGgGgLmLgGZMPDBhDJDHjMBFnD",
  "WPPwPGwlLgZwmWlslCLRNbrsTrfRrNNQqsspBT",
  "dNNpHpchLppdccTNtZZTRRPSSnwPPSbSnhhrhnSJ",
  "qfqsFsqffgQMznJrPznbMrrB",
  "vglfqQCgDgFjglCDCjLZpTHNPHttdcZVVN",
  "FWtDHDStZwrFCDwrgWPFDsWQJZzlMdpZzlNpNjdjjQzNzj",
  "BqnVGVcbTmGfHLGVzvpQpvJvQlflMdJp",
  "ThRRchnHqLTGbFCCCrrSSFhFCs",
  "wJrwdZPnJwqPbJPCnjFZdvHtMvsLsTsDtHsHDDqvpH",
  "RWzNRWjRfgjNMMLvcMcLNt",
  "WGGRQzzRmRmVQSgwrwJjjCbJhnbShJ",
  "cjngcvcwbMwWnbMWjbgvnsjPftsqfthqsBtsJJJJBt",
  "HrGFmDDzpmLTHpDsPfsBNBPfzZNPqN",
  "DDVmDplDrpGSVSTTHGlpLnPwCRnWcvWCdPbbMvcVdW",
  "BVRlBfPBffWswVWQsfwBNNPMFMmmGFZGnWZGtztrzMZMnz",
  "HqSJchHTHbTgHhGhvmRzFmnFtzRF",
  "RJqHTpgDLJDSqLJJPNVjsfPwBVsVLlfN",
  "NDrBlSmrFBlbbJllmtHHwhNNhZztqHVRzQ",
  "CMTCGLcvvtfCdCcCvCnMTMcTzjHwVZVRLjRRjQjRHRwzwjVH",
  "dfGdgGMGPggnvfvgbtDtlSJPDSFJPslJ",
];

function findTheSameChar(first, second) {
  const duplicatedCharList = first.split("").filter((c) => second.includes(c));
  return duplicatedCharList;
}

const result = sack.map((s) => {
  const first = s.slice(0, s.length / 2);
  const second = s.slice(s.length / 2);
  return findTheSameChar(first, second);
});

const removeDuplicates = result.map((r) => {
  const data = new Set(r);
  return [...data].toString();
});

const convertedNumbers = removeDuplicates.map((ed) => {
  const formattedNumForUpperCase = ed.toLowerCase().charCodeAt(0) - 97 + 1;
  const formattedNumForLowerCase = ed.charCodeAt(0) - 97 + 1;
  if (ed == ed.toUpperCase()) {
    return formattedNumForUpperCase + 26;
  }
  if (ed == ed.toLowerCase()) {
    return formattedNumForLowerCase;
  }
});

const sumAll = convertedNumbers.reduce((prev, curr) => prev + curr, 0);

console.log(sumAll);
