import { Command } from 'commander';
import { logger } from '../logger';

import { ManifetsLoader } from '../tools/manifests-loader'
import { PackageRenderer } from '../tools/package-renderer';

export default function (program: Command)
{
    program
        .command('scan')
        .description('Scans for Kubernetes Manifests')
        .argument('<path>', 'Path to file, directory or search pattern')
        .action(async (path, options) => {

            logger.info("OPTIONS: ", options);
            logger.info("path: ", path);

            const loader = new ManifetsLoader(logger);
            const manifestPackage = await loader.load(path);

            const renderer = new PackageRenderer(logger);
            renderer.renderPackageFiles(manifestPackage);
            renderer.renderPackageFileErrors(manifestPackage);
            renderer.renderPackageManifests(manifestPackage);

        })
        ;
}
