const PERCY_SNAPSHOT_VIEWPORT_WIDTHS = [320, 500, 768, 1200];

function getSnapshotConfig() {
  return {
    width: PERCY_SNAPSHOT_VIEWPORT_WIDTHS,
  };
}

export { getSnapshotConfig };
