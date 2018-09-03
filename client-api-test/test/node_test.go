package test

import (
	"testing"
	"boscoin.io/sebak-test/go/pkg/cluster"
	"os"
	"io/ioutil"
)

func Test_NodeAPI(t *testing.T) {
	var clusterInfo string
	if buf, err := ioutil.ReadFile("/logs/cluster_info.json"); err == nil {
		clusterInfo = string(buf)
	}

	jobId, _ := os.LookupEnv("PROW_JOB_ID")
	cluster, err := cluster.NewCluster(jobId, clusterInfo)
	if err != nil {
		os.Exit(1)
	}

	cluster.NodeInfo(0)
	cluster.NodeInfo(1)
	cluster.NodeInfo(2)

	t.Fail()
}
