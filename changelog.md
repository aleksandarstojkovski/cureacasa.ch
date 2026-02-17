# Changelog

## 2026-02-17T22:45:00+01:00
- **Operation**: Modified
- **File**: `.github/workflows/deploy.yaml`
- **Backup**: `.github/workflows/deploy.yaml.backup-20260217224542`
- **Description**: Added `--legacy-peer-deps` flag to `npm ci` command to resolve peer dependency conflict between React 19 and react-helmet-async 2.0.5

## 2026-02-17T22:45:00+01:00
- **Operation**: Modified
- **File**: `website/package.json`
- **Backup**: `website/package.json.backup-20260217224540`
- **Description**: Attempted to update react-helmet-async to v3 (reverted back to 2.0.5 since v3 doesn't exist yet)
